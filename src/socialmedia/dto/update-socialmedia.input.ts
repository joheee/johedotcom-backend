import { CreateSocialmediaInput } from './create-socialmedia.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSocialmediaInput extends PartialType(CreateSocialmediaInput) {
  @Field(() => String)
  id: string;
}
