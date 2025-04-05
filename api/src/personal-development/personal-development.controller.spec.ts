import { Test, TestingModule } from '@nestjs/testing';
import { PersonalDevelopmentController } from './personal-development.controller';
import { PersonalDevelopmentService } from './personal-development.service';

describe('PersonalDevelopmentController', () => {
  let controller: PersonalDevelopmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalDevelopmentController],
      providers: [PersonalDevelopmentService],
    }).compile();

    controller = module.get<PersonalDevelopmentController>(PersonalDevelopmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
