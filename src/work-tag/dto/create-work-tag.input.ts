import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkTagInput {
  @Field(() => String, { description: 'mutation for link the work with its tag, vice versa', nullable:true })
  workId:string

  @Field(() => String, {nullable:true})
  tagId:string
}
