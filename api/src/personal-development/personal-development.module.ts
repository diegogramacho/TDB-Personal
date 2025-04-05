import { Module } from '@nestjs/common';
import { PersonalDevelopmentService } from './personal-development.service';
import { PersonalDevelopmentController } from './personal-development.controller';

@Module({
  controllers: [PersonalDevelopmentController],
  providers: [PersonalDevelopmentService],
})
export class PersonalDevelopmentModule {}
