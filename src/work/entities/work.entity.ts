import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Tag } from 'src/tag/entities/tag.entity';

@ObjectType()
export class Work {
  @Field(() => String, { description: 'primary key for work',nullable:true })
  id:string
  @Field(() => String, { nullable:true })
  picture:string
  @Field(() => String, { nullable:true })
  title:string
  @Field(() => String, { nullable:true })
  description:string
  @Field(() => String, { nullable:true })
  createdAt:string
  @Field(() => [Tag], { nullable:true })
  tags:Tag[]
}
