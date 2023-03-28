import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Socialmedia {
  @Field(() => String, { description: 'id for social media', nullable:true })
  id:String

  @Field (() => String, {nullable:true})
  url:String

  @Field(() => String, {nullable:true})
  username:String

}
