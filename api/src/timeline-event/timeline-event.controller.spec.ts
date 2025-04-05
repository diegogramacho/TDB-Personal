import { Test, TestingModule } from '@nestjs/testing';
import { TimelineEventController } from './timeline-event.controller';
import { TimelineEventService } from './timeline-event.service';

describe('TimelineEventController', () => {
  let controller: TimelineEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimelineEventController],
      providers: [TimelineEventService],
    }).compile();

    controller = module.get<TimelineEventController>(TimelineEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
