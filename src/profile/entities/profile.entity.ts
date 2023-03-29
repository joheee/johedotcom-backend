import { ObjectType, Field } from '@nestjs/graphql';
import { randomUUID } from 'crypto';

@ObjectType()
export class Profile {
  @Field(() => String, {defaultValue:randomUUID(), description: 'primary key for profile', nullable:true })
  id:string

  @Field(() => String, { nullable: true })
  picture:string
  
  @Field(() => String, { nullable: true })
  description:string

  @Field(() => String, { nullable: true })
  opening:string

  @Field(() => String, { nullable: true })
  logo:string
}
