import { Test, TestingModule } from '@nestjs/testing';
import { WorkBlogTagResolver } from './work-blog-tag.resolver';
import { WorkBlogTagService } from './work-blog-tag.service';

describe('WorkBlogTagResolver', () => {
  let resolver: WorkBlogTagResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkBlogTagResolver, WorkBlogTagService],
    }).compile();

    resolver = module.get<WorkBlogTagResolver>(WorkBlogTagResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
