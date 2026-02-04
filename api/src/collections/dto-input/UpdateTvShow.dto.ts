import { PartialType } from '@nestjs/swagger';
import { CreateTvShowDto } from './CreateCollection.dto';

export class UpdateTvShowDto extends PartialType(CreateTvShowDto) {}
