import { PartialType } from '@nestjs/mapped-types';
import { CreateTimelineEventDto } from './create-timeline-event.dto';

export class UpdateTimelineEventDto extends PartialType(CreateTimelineEventDto) {}
