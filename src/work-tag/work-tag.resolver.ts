import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkTagService } from './work-tag.service';
import { WorkTag } from './entities/work-tag.entity';
import { CreateWorkTagInput } from './dto/create-work-tag.input';
import { UpdateWorkTagInput } from './dto/update-work-tag.input';

@Resolver(() => WorkTag)
export class WorkTagResolver {
  constructor(private readonly workTagService: WorkTagService) {}

  @Mutation(() => WorkTag)
  createWorkTag(@Args('createWorkTagInput') createWorkTagInput: CreateWorkTagInput) {
    return this.workTagService.create(createWorkTagInput);
  }

  @Mutation(() => WorkTag)
  updateWorkTag(@Args('updateWorkTagInput') updateWorkTagInput: UpdateWorkTagInput) {
    return this.workTagService.update(updateWorkTagInput.id, updateWorkTagInput);
  }

  @Mutation(() => WorkTag)
  removeWorkTag(@Args('id', { type: () => String }) id:string) {
    return this.workTagService.remove(id);
  }
}
