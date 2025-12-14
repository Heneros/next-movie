import { ICommand,  } from "@nestjs/cqrs";
import { CreateGalleryImageDto } from "../dto-input/gallery-image.dto";

export class AddImagesGalleryToMovie  implements ICommand{
    constructor(public readonly movieId:number, 
     public readonly  images: CreateGalleryImageDto[]
    ){

    }
}
