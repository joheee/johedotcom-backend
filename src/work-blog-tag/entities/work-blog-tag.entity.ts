import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Blog } from 'src/blog/entities/blog.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { Work } from 'src/work/entities/work.entity';

@ObjectType()
export class WorkBlogTag {
  @Field(() => String, {description:"connector between work, tag, blog", nullable:true})
  id:string
  @Field(()=>Work, {nullable:true})
  Work?:Work
  @Field(()=>Blog, {nullable:true})
  Blog?:Blog
  @Field(()=>Tag, {nullable:true})
  Tag?:Tag
}
