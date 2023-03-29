import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Socialmedia {
  @Field(() => String, { description: 'id for social media', nullable:true })
  id:string

  @Field (() => String, {nullable:true})
  url:string

  @Field(() => String, {nullable:true})
  username:string

}
