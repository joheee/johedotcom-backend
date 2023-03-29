import { ObjectType, Field } from '@nestjs/graphql';
import { WorkTag } from 'src/work-tag/entities/work-tag.entity';

@ObjectType()
export class Tag {
  @Field(() => String, { description: 'entity tag',nullable:true })
  id:string
  @Field(() => String, { nullable:true })
  title:string
  @Field(() => [WorkTag], { nullable:true })
  workTags?:WorkTag[]
}
