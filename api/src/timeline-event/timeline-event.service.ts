import { Injectable } from '@nestjs/common';
import { CreateTimelineEventDto } from './dto/create-timeline-event.dto';
import { UpdateTimelineEventDto } from './dto/update-timeline-event.dto';

@Injectable()
export class TimelineEventService {
  create(createTimelineEventDto: CreateTimelineEventDto) {
    return 'This action adds a new timelineEvent';
  }

  findAll() {
    return `This action returns all timelineEvent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timelineEvent`;
  }

  update(id: number, updateTimelineEventDto: UpdateTimelineEventDto) {
    return `This action updates a #${id} timelineEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} timelineEvent`;
  }
}
