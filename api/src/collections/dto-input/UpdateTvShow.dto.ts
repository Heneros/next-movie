import { PartialType } from '@nestjs/swagger';
import { CreateTvShowDto } from './CreateTvShow.dto';

export class UpdateTvShowDto extends PartialType(CreateTvShowDto) {}
