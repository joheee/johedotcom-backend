import { CreateWorkBlogTagInput } from './create-work-blog-tag.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkBlogTagInput extends PartialType(CreateWorkBlogTagInput) {
  @Field(() => String)
  id: string;
}
