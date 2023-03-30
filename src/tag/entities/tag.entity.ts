import { ObjectType, Field } from '@nestjs/graphql';
import { WorkBlogTag } from 'src/work-blog-tag/entities/work-blog-tag.entity';

@ObjectType()
export class Tag {
  @Field(() => String, { description: 'entity tag',nullable:true })
  id:string
  @Field(() => String, { nullable:true })
  title:string
  @Field(() => [WorkBlogTag], { nullable:true })
  workBlogTags?:WorkBlogTag[]
}
