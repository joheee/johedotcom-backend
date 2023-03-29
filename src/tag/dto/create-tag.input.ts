import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTagInput {
  @Field(() => String, { nullable:true })
  title:string
  @Field(() => String, { nullable:true })
  workId:string
}
