import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBlogInput {
  @Field(() => String, { nullable:true })
  url:string
  @Field(() => String, { nullable:true })
  title:string
  @Field(() => String, { nullable:true })
  description:string
}
