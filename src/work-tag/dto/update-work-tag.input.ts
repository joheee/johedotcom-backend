import { CreateWorkTagInput } from './create-work-tag.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkTagInput extends PartialType(CreateWorkTagInput) {
  @Field(() => String)
  id: string
}
