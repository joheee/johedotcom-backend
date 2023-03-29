import { ObjectType, Field } from '@nestjs/graphql';
import { WorkTag } from 'src/work-tag/entities/work-tag.entity';

@ObjectType()
export class Work {
  @Field(() => String, { description: 'entity work',nullable:true })
  id:string
  @Field(() => String, { nullable:true })
  picture:string
  @Field(() => String, { nullable:true })
  title:string
  @Field(() => String, { nullable:true })
  description:string
  @Field(() => Date, { nullable:true })
  createdAt:Date
  @Field(() => [WorkTag], { nullable:true })
  workTags?:WorkTag[]
}
