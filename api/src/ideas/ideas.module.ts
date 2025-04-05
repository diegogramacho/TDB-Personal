import { Module } from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { IdeasController } from './ideas.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [IdeasController],
  providers: [IdeasService],
  imports: [DatabaseModule],
})
export class IdeasModule {}
