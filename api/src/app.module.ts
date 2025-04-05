import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

import { FinancialModule } from './financial/financial.module';
import { TasksModule } from './tasks/tasks.module';
import { PersonalDevelopmentModule } from './personal-development/personal-development.module';
import { IdeasModule } from './ideas/ideas.module';
import { TimelineEventModule } from './timeline-event/timeline-event.module';


@Module({
  imports: [AuthModule, UserModule, DatabaseModule, FinancialModule, TasksModule, PersonalDevelopmentModule, IdeasModule, TimelineEventModule],
})
export class AppModule {}
