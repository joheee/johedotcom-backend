import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field(() => String)
  picture:String
  
  @Field(() => String)
  description:String

  @Field(() => String)
  opening:String
}
