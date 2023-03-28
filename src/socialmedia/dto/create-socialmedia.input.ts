import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSocialmediaInput {
  @Field (() => String)
  url:String

  @Field(() => String)
  username:String

}
