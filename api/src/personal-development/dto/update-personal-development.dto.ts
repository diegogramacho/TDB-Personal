import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalDevelopmentDto } from './create-personal-development.dto';

export class UpdatePersonalDevelopmentDto extends PartialType(CreatePersonalDevelopmentDto) {}
