import { Module } from '@nestjs/common';
import { PersonalDevelopmentService } from './personal-development.service';
import { PersonalDevelopmentController } from './personal-development.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [PersonalDevelopmentController],
  providers: [PersonalDevelopmentService],
  imports: [DatabaseModule],
})
export class PersonalDevelopmentModule {}
