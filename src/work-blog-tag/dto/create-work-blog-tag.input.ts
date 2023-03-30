import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkBlogTagInput {
  @Field(()=>String, {description:"connector for work, blog, and tag",nullable:true})
  workId:string
  @Field(()=>String, {nullable:true})
  tagId:string
  @Field(()=>String, {nullable:true})
  blogId:string
}
