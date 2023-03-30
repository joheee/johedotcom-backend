import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(private prisma:PrismaService){}

  async create(createTagInput: CreateTagInput) : Promise<Tag> {
    if(!createTagInput.title) return new Tag()
    return await this.prisma.tag.create({
      data:{
        title:createTagInput.title
      }
    })
  }

  async findAll() : Promise<Tag[]> {
    return await this.prisma.tag.findMany({
      include:{workBlogTags:{
        include:{
          Work:true,
          Tag:true,
          Blog:true
        }
      }}
    })
  }

  async findOne(id: string) : Promise<Tag> {
    const find = await this.prisma.tag.findFirst({
      where:{id:id},
      include:{workBlogTags:{
        include:{
          Work:true,
          Tag:true,
          Blog:true
        }
      }}
    })
    if(!find) return new Tag()
    return find
  }

  async update(id: string, updateTagInput: UpdateTagInput) : Promise<Tag> {
    const find = await this.prisma.tag.findFirst({
      where:{id:id}
    })
    if(!find) return new Tag()
    return await this.prisma.tag.update({
      where:{id:id},
      data:{
        title:updateTagInput.title
      },
      include:{workBlogTags:{
        include:{
          Work:true,
          Tag:true,
          Blog:true
        }
      }}
    })
  }

  async remove(id: string) : Promise<Tag> {
    const find = await this.prisma.tag.findFirst({
      where:{id:id}
    })
    if(!find) return new Tag()
    return await this.prisma.tag.delete({
      where:{id:id},
      include:{workBlogTags:{
        include:{
          Work:true,
          Tag:true,
          Blog:true
        }
      }}
    })
  }
}
