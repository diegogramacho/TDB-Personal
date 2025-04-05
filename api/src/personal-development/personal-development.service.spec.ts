import { Test, TestingModule } from '@nestjs/testing';
import { PersonalDevelopmentService } from './personal-development.service';

describe('PersonalDevelopmentService', () => {
  let service: PersonalDevelopmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalDevelopmentService],
    }).compile();

    service = module.get<PersonalDevelopmentService>(PersonalDevelopmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
