import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import bcrypt from 'bcryptjs';

// const prisma = new PrismaClient();

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  const directorNames = [
    'Steven Spielberg',
    'Christopher Nolan',
    'Greta Gerwig',
    'Ava DuVernay',
    'Quentin Tarantino',
  ];

  const userAdminEmail = 'seed-admin@example.com';
  const userEditorEmail = 'seed-editor@example.com';
  const pass = 'password123';
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(pass, salt);

  const user = await prisma.user.upsert({
    where: { email: userAdminEmail },
    update: {},
    create: {
      role: 'ADMIN',
      email: userAdminEmail,
      isEmailVerified: true,
      username: 'seed_admin',
      password: hashedPassword,
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: userEditorEmail },
    update: {},
    create: {
      role: 'EDITOR',
      email: userEditorEmail,
      isEmailVerified: true,
      username: 'seed_editor',
      password: hashedPassword,
    },
  });

  await prisma.verifyResetToken.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      token: 'EDITOR',
      userId: user.id,
    },
  });

  await prisma.verifyResetToken.upsert({
    where: { userId: user2.id },
    update: {},
    create: {
      token: 'qwwerrtt',
      userId: user2.id,
    },
  });
  console.log('User ready:', { id: user.id, email: user.email });

  const directorPromises = directorNames.map((name) =>
    prisma.director.create({
      data: { name, bio: faker.lorem.sentences(2) },
    }),
  );

  const directors = await Promise.all(directorPromises);

  const galleryPromises: any = [];
  const avatarPromises: any = [];
  const moviePromises = [];

  const backDropItems = [
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674479/next-movieapp/1vIsdKr5SSzihUaRlGRgjA_1764674480314.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674480/next-movieapp/02U0zl9eiBs_1764674482847.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130486/next-movieapp/740549_1763130491249.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1760275248/next-movieapp/2df5d57a964e7b2fb34bdadf9e92529a_1760275248189.jpg',
    'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130597/next-movieapp/te0aifojlpl41_1763130602471.jpg',
  ];

  for (let i = 0; i < 12; i++) {
    const title = faker.lorem.words({ min: 2, max: 4 });
    const slug = faker.helpers.slugify(title).toLowerCase();

    const categories = faker.helpers.arrayElements(
      ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Fantasy', 'Thriller'],
      faker.number.int({ min: 1, max: 3 }),
    );
    const providers = [
      'Netflix',
      'Disney',
      'Sony Pictures',
      'Universal',
      'Paramount',
    ];

    const avgRating = faker.number.float({ min: 1, max: 5, fractionDigits: 2 });

    const randomProvider = faker.helpers.arrayElement(providers);
    const backdrop = faker.helpers.arrayElement(backDropItems);

    const selected = faker.helpers.arrayElements(
      directors,
      faker.number.int({ min: 0, max: 2 }),
    );

    moviePromises.push(
      prisma.movie.create({
        data: {
          title: title,
          description: faker.lorem.sentence(),
          slug: slug,
          backdropUrl: backdrop,
          provider: randomProvider,
          avgRating: avgRating,
          year: faker.number.int({ min: 1950, max: 2025 }),
          category: categories,
          author: {
            connect: { id: user.id },
          },
          directors: {
            connect: selected.map((d) => ({ id: d.id })),
          },
        },
      }),
    );
  }

  const movies = await Promise.all(moviePromises);

  movies.forEach((movie) => {
    for (let j = 0; j < 12; j++) {
      const backDropItems = [
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674479/next-movieapp/1vIsdKr5SSzihUaRlGRgjA_1764674480314.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1764674480/next-movieapp/02U0zl9eiBs_1764674482847.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130486/next-movieapp/740549_1763130491249.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1760275248/next-movieapp/2df5d57a964e7b2fb34bdadf9e92529a_1760275248189.jpg',
        'https://res.cloudinary.com/dmk9uxtiu/image/upload/v1763130597/next-movieapp/te0aifojlpl41_1763130602471.jpg',
      ];

      const valImg = faker.helpers.arrayElement(backDropItems);
      galleryPromises.push(
        prisma.galleryImage.create({
          data: {
            url: valImg,
            publicId: String(faker.number.int({ min: 1, max: 3025 })),
            // title,
            movie: {
              connect: { id: movie.id },
            },
          },
        }),
      );
      avatarPromises.push(
        prisma.avatar.create({
          data: {
            url: valImg,
            publicId: String(faker.number.int({ min: 3025, max: 6925 })),

            movie: {
              connect: { id: movie.id },
            },
          },
        }),
      );
    }
  });
  const galleries = await Promise.all(galleryPromises);
  const avatars = await Promise.all(avatarPromises);
  movies.forEach((movie) => {
    console.log('Movie ready:', movie.title, 'id:', movie.id);
  });
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error('Seeding error: ', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
