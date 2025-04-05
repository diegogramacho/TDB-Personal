import { Test, TestingModule } from '@nestjs/testing';
import { TimelineEventService } from './timeline-event.service';

describe('TimelineEventService', () => {
  let service: TimelineEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimelineEventService],
    }).compile();

    service = module.get<TimelineEventService>(TimelineEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
