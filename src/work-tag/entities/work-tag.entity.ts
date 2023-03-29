import { ObjectType, Field} from '@nestjs/graphql';
import { Tag } from 'src/tag/entities/tag.entity';
import { Work } from 'src/work/entities/work.entity';

@ObjectType()
export class WorkTag {
  @Field(() => String, { description: 'connector for entity work and tag', nullable:true })
  id: string;
  @Field(() => Work, { nullable: true})
  Work?: Work
  @Field(() => Tag, { nullable: true})
  Tag?: Tag
}
