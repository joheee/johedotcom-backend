import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkResolver } from './work.resolver';

@Module({
  providers: [WorkResolver, WorkService]
})
export class WorkModule {}
