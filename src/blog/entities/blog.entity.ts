import { ObjectType, Field, Int } from '@nestjs/graphql';
import { WorkBlogTag } from 'src/work-blog-tag/entities/work-blog-tag.entity';

@ObjectType()
export class Blog {
  @Field(() => String, { description: 'entity blog',nullable:true })
  id:string
  @Field(() => String, { nullable:true })
  url:string
  @Field(() => String, { nullable:true })
  title:string
  @Field(() => String, { nullable:true })
  description:string
  @Field(() => Date, { nullable:true })
  createdAt:Date
  @Field(() => [WorkBlogTag], { nullable:true })
  workBlogTags?:WorkBlogTag[]
}
