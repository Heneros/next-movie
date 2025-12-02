import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
const streamifier = require('streamifier');
import {
  v2 as cloudinary,
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';
import 'multer';
import { AvatarRepository } from './repository/AvatarRepository.repository';
import { folderCloud } from '../data';
import path from 'path';
import { GalleryRepository } from '@/movies/repository/Gallery.repository';
import { MovieRepository } from '@/movies/repository/Movie.repository';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CloudinaryService {
  constructor(
    private galleryRepository: GalleryRepository,
    private avatarRepository: AvatarRepository,
    private movieRepository: MovieRepository,
    private prisma: PrismaService,
  ) {}

  async uploadFileAvatarUser(
    userId: number,
    // fileBuffer: Buffer,
    file: Express.Multer.File,
    originalName: string,
  ) {
    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException({
        message: 'Invalid image file',
        name: 'Error',
        http_code: 400,
      });
    }
    try {
      const avatar = await this.avatarRepository.findUniqueByUserId(userId);

      if (!avatar) {
        throw new NotFoundException('Avatar not found');
      }
      if (avatar) {
        await this.deleteImage(avatar.publicId);
        await this.avatarRepository.delete(avatar.id);
      }

      const mainFolder = folderCloud;
      const fileName = path.parse(originalName).name;
      const uniqueFileName = `${fileName}_${Date.now()}`;
      const filePathOnCloudinary = `${mainFolder}/${uniqueFileName};`;

      const imageC = await new Promise<{ url: string }>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            public_id: filePathOnCloudinary,
            resource_type: 'image',
            fetch_format: 'auto',
            quality: 'auto:eco',
            crop: 'limit',
          },
          (
            err: UploadApiErrorResponse | undefined,
            result: UploadApiResponse | undefined,
          ) => {
            if (err) {
              console.error(`Cloudinary:  ${err}`);
              reject(err);
            } else if (result && result.secure_url) {
              resolve({ url: result.secure_url });
            } else {
              reject(
                new Error('Failed to get secure_url from Cloudinary response'),
              );
            }
          },
        );

        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });
      const newAvatar = await this.avatarRepository.create({
        data: {
          url: imageC.url,
          publicId: filePathOnCloudinary,
          userId: userId,
        },
      });
      return { avatar: newAvatar.id };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      console.error(`Error in uploadToCloudinary::  ${error}`);
    }
  }

  async uploadFromUrl(
    imageUrl: string,
    publicId: string,
  ): Promise<{ url: string; publicId: string }> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        imageUrl,
        {
          public_id: publicId,
          resource_type: 'image',
        },

        (error, result) => {
          if (error) {
            return reject(error);
          }
          if (!result?.secure_url) {
            return reject(new Error('Upload failed'));
          }
          resolve({
            url: result.secure_url,
            publicId: result.public_id,
          });
        },
      );
    });
  }

  async getImageAvatar(userId: number) {
    if (!userId) {
      return;
    }

    const res = await this.avatarRepository.findUnique({ userId });
    if (!res) {
      return;
    }
    return res;
  }
  async deleteImage(publicId: string) {
    return cloudinary.uploader.destroy(publicId);
  }

  async uploadPreview(movieId: number, file: Express.Multer.File) {
    if (!file) throw new BadRequestException('No file provided');

    const originalName = file.originalname;
    const fileName = path.parse(originalName).name;
    const uniqueFileName = `${fileName}_${Date.now()}`;

    const filePathOnCloudinary = `${folderCloud}/${uniqueFileName}`;

    const uploaded = await new Promise<{
      url: string;
      publicId: string;
    }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          public_id: filePathOnCloudinary,
          resource_type: 'image',
          fetch_format: 'auto',
          quality: 'auto:eco',
        },
        (err, result) => {
          if (err) reject(err);
          else if (result?.secure_url)
            resolve({
              url: result.secure_url,
              publicId: result.public_id,
            });
          else reject(new Error('No Cloudinary URL'));
        },
      );
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
    const findImage = await this.avatarRepository.findFirst({
      movieId,
    });

    if (findImage) {
      await cloudinary.uploader.destroy(findImage.publicId);

      return await this.avatarRepository.update(
        { id: findImage.id },
        {
          url: uploaded.url,
          publicId: uploaded.publicId,
        },
      );
      // return res;
    } else {
      return await this.avatarRepository.createPreview(
        uploaded.url,
        uploaded.publicId,
        movieId,
      );
    }
  }

  async getImagePreview(movieId: number) {
    const res = await this.avatarRepository.findFirst({
      movieId,
    });

    if (!res) {
      throw new NotFoundException('Not found image');
    }
    return res;
  }

  async deleteImagePreview(previewId: number) {
    const res = await this.avatarRepository.findUnique(previewId);

    if (!res) {
      throw new NotFoundException('Not found image');
    }
    await this.avatarRepository.delete(previewId);

    await cloudinary.uploader.destroy(res.publicId);

    return res.id;
  }

  async uploadGalleryImages(movieId: number, files: Express.Multer.File[]) {
    const savedImages = [];

    for (const file of files) {
      const originalName = file.originalname;
      const fileName = path.parse(originalName).name;
      const uniqueFileName = `${fileName}_${Date.now()}`;
      const filePathOnCloudinary = `${folderCloud}/${uniqueFileName}`;

      const uploaded = await new Promise<{
        url: string;
        publicId: string;
      }>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            public_id: filePathOnCloudinary,
            resource_type: 'image',
            fetch_format: 'auto',
            quality: 'auto:eco',
          },
          (err, result) => {
            if (err) reject(err);
            else if (result?.secure_url)
              resolve({
                url: result.secure_url,
                publicId: result.public_id,
              });
            else reject(new Error('No Cloudinary URL'));
          },
        );
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });

      const newGallery = await this.galleryRepository.create({
        url: uploaded.url,
        publicId: uploaded.publicId,
        // title,
        movie: {
          connect: { id: movieId },
        },
      });

      //await this.prisma.movie.update({
      //   where: { id: movieId },
      //   data: {
      //     galleryImages: newGallery.id,
      //   },
      // });

      savedImages.push(newGallery);
    }

    return { images: savedImages };
  }
}
