import { CreateWorkInput } from './create-work.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkInput extends PartialType(CreateWorkInput) {
  @Field(() => String)
  id: string;
}
