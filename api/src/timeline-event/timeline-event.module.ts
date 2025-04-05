import { Module } from '@nestjs/common';
import { TimelineEventService } from './timeline-event.service';
import { TimelineEventController } from './timeline-event.controller';

@Module({
  controllers: [TimelineEventController],
  providers: [TimelineEventService],
})
export class TimelineEventModule {}
