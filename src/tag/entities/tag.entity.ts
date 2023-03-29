import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Work } from 'src/work/entities/work.entity';

@ObjectType()
export class Tag {
  @Field(() => String, { description: 'primary key for tag',nullable:true })
  id:string
  @Field(() => String, { nullable:true })
  title:string
  @Field(() => Work, {nullable:true})
  work:Work
}
