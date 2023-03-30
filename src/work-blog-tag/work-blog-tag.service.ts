import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorkBlogTagInput } from './dto/create-work-blog-tag.input';
import { UpdateWorkBlogTagInput } from './dto/update-work-blog-tag.input';
import { WorkBlogTag } from './entities/work-blog-tag.entity';

@Injectable()
export class WorkBlogTagService {
  constructor(private prisma:PrismaService){}

  async create(createWorkBlogTagInput: CreateWorkBlogTagInput) : Promise<WorkBlogTag> {
    if(!createWorkBlogTagInput.blogId || !createWorkBlogTagInput.workId || !createWorkBlogTagInput.tagId) return new WorkBlogTag()
    return await this.prisma.workBlogTag.create({
      data:{
        blogId:createWorkBlogTagInput.blogId,
        workId:createWorkBlogTagInput.workId,
        tagId:createWorkBlogTagInput.tagId
      },
      include:{
        Blog:true,
        Tag:true,
        Work:true
      }
    })
  }

  async findAll() : Promise<WorkBlogTag[]> {
    return await this.prisma.workBlogTag.findMany({
      include:{
        Blog:true,
        Tag:true,
        Work:true
      }
    })
  }

  async findOne(id: string) : Promise<WorkBlogTag> {
    const find = await this.prisma.workBlogTag.findFirst({
      where:{id:id},
      include:{
        Blog:true,
        Tag:true,
        Work:true
      }
    })
    if(!find) return new WorkBlogTag()
    return find
  }

  async update(id: string, updateWorkBlogTagInput: UpdateWorkBlogTagInput) : Promise<WorkBlogTag> {
    const find = await this.prisma.workBlogTag.findFirst({
      where:{id:id},
      include:{
        Blog:true,
        Tag:true,
        Work:true
      }
    })
    if(!find) return new WorkBlogTag()
    return await this.prisma.workBlogTag.update({
      where:{id:id},
      data:{
        blogId:updateWorkBlogTagInput.blogId,
        workId:updateWorkBlogTagInput.workId,
        tagId:updateWorkBlogTagInput.tagId 
      },
      include:{
        Blog:true,
        Tag:true,
        Work:true
      }
    })
  }

  async remove(id: string) : Promise<WorkBlogTag> {
    const find = await this.prisma.workBlogTag.findFirst({
      where:{id:id},
      include:{
        Blog:true,
        Tag:true,
        Work:true
      }
    })
    if(!find) return new WorkBlogTag()
    return await this.prisma.workBlogTag.delete({
      where:{id:id},
      include:{
        Blog:true,
        Tag:true,
        Work:true
      }
    })
  }
}
