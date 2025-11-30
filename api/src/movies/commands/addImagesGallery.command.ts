import { ICommand,  } from "@nestjs/cqrs";
import { CreateGalleryImageDto } from "../dto-input/gallery-image.dto";

export class AddImagesToMovie  implements ICommand{
    constructor(movieId:number, 
      images: CreateGalleryImageDto[]
    ){

    }
}
