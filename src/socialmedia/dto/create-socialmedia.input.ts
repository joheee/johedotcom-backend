import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSocialmediaInput {
  @Field (() => String)
  url:string

  @Field(() => String)
  username:string

}
