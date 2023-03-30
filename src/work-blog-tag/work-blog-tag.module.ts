import { Module } from '@nestjs/common';
import { WorkBlogTagService } from './work-blog-tag.service';
import { WorkBlogTagResolver } from './work-blog-tag.resolver';

@Module({
  providers: [WorkBlogTagResolver, WorkBlogTagService]
})
export class WorkBlogTagModule {}
