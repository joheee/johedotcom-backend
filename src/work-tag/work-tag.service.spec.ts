import { Test, TestingModule } from '@nestjs/testing';
import { WorkTagService } from './work-tag.service';

describe('WorkTagService', () => {
  let service: WorkTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkTagService],
    }).compile();

    service = module.get<WorkTagService>(WorkTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
