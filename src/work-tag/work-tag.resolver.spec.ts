import { Test, TestingModule } from '@nestjs/testing';
import { WorkTagResolver } from './work-tag.resolver';
import { WorkTagService } from './work-tag.service';

describe('WorkTagResolver', () => {
  let resolver: WorkTagResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkTagResolver, WorkTagService],
    }).compile();

    resolver = module.get<WorkTagResolver>(WorkTagResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
