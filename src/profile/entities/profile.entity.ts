import { ObjectType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';

@ObjectType()
export class Profile {
  @Field(() => String, {defaultValue:randomUUID(), description: 'primary key for profile', nullable:true })
  id:String

  @Field(() => String, { nullable: true })
  picture:String
  
  @Field(() => String, { nullable: true })
  description:String

  @Field(() => String, { nullable: true })
  opening:String
}
