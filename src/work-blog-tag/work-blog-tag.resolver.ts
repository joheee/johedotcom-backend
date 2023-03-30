import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkBlogTagService } from './work-blog-tag.service';
import { WorkBlogTag } from './entities/work-blog-tag.entity';
import { CreateWorkBlogTagInput } from './dto/create-work-blog-tag.input';
import { UpdateWorkBlogTagInput } from './dto/update-work-blog-tag.input';

@Resolver(() => WorkBlogTag)
export class WorkBlogTagResolver {
  constructor(private readonly workBlogTagService: WorkBlogTagService) {}

  @Mutation(() => WorkBlogTag)
  createWorkBlogTag(@Args('createWorkBlogTagInput') createWorkBlogTagInput: CreateWorkBlogTagInput) {
    return this.workBlogTagService.create(createWorkBlogTagInput);
  }

  @Query(() => [WorkBlogTag], { name: 'workBlogTags' })
  findAll() {
    return this.workBlogTagService.findAll();
  }

  @Query(() => WorkBlogTag, { name: 'workBlogTag' })
  findOne(@Args('id', { type: () => String}) id: string) {
    return this.workBlogTagService.findOne(id);
  }

  @Mutation(() => WorkBlogTag)
  updateWorkBlogTag(@Args('updateWorkBlogTagInput') updateWorkBlogTagInput: UpdateWorkBlogTagInput) {
    return this.workBlogTagService.update(updateWorkBlogTagInput.id, updateWorkBlogTagInput);
  }

  @Mutation(() => WorkBlogTag)
  removeWorkBlogTag(@Args('id', { type: () => String}) id: string) {
    return this.workBlogTagService.remove(id);
  }
}
