import { Test, TestingModule } from '@nestjs/testing';
import { WorkBlogTagService } from './work-blog-tag.service';

describe('WorkBlogTagService', () => {
  let service: WorkBlogTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkBlogTagService],
    }).compile();

    service = module.get<WorkBlogTagService>(WorkBlogTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
