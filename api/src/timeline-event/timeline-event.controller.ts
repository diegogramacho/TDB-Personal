import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimelineEventService } from './timeline-event.service';
import { CreateTimelineEventDto } from './dto/create-timeline-event.dto';
import { UpdateTimelineEventDto } from './dto/update-timeline-event.dto';

@Controller('timeline-event')
export class TimelineEventController {
  constructor(private readonly timelineEventService: TimelineEventService) {}

  @Post()
  create(@Body() createTimelineEventDto: CreateTimelineEventDto) {
    return this.timelineEventService.create(createTimelineEventDto);
  }

  @Get()
  findAll() {
    return this.timelineEventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timelineEventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimelineEventDto: UpdateTimelineEventDto) {
    return this.timelineEventService.update(+id, updateTimelineEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timelineEventService.remove(+id);
  }
}
