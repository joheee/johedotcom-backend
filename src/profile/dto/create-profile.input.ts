import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
  @Field(() => String)
  picture:string
  
  @Field(() => String)
  description:string

  @Field(() => String)
  opening:string

  @Field(() => String)
  logo:string
}
