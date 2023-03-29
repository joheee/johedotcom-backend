import { Module } from '@nestjs/common';
import { WorkTagService } from './work-tag.service';
import { WorkTagResolver } from './work-tag.resolver';

@Module({
  providers: [WorkTagResolver, WorkTagService]
})
export class WorkTagModule {}
