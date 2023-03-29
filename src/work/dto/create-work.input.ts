import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkInput {
  @Field(() => String, { nullable:true })
  picture:string
  @Field(() => String, { nullable:true })
  title:string
  @Field(() => String, { nullable:true })
  description:string
}
