import { Test, TestingModule } from '@nestjs/testing';
import { WorkResolver } from './work.resolver';
import { WorkService } from './work.service';

describe('WorkResolver', () => {
  let resolver: WorkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkResolver, WorkService],
    }).compile();

    resolver = module.get<WorkResolver>(WorkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
