import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorkInput } from './dto/create-work.input';
import { UpdateWorkInput } from './dto/update-work.input';
import { Work } from './entities/work.entity';

@Injectable()
export class WorkService {
  constructor(private prisma:PrismaService){}

  async create(createWorkInput: CreateWorkInput) : Promise<Work> {
    if(!createWorkInput.description || !createWorkInput.picture || !createWorkInput.title) return new Work()
    return await this.prisma.work.create({
      data:{
        description:createWorkInput.description,
        picture:createWorkInput.picture,
        title:createWorkInput.title
      }
    })
  }

  async findAll() : Promise<Work[]> {
    return await this.prisma.work.findMany({
      include:{workBlogTags:{
        include:{
          Tag:true,
          Work:true,
        }
      }}
    })
  }

  async findOne(id: string) : Promise<Work> {
    const find = await this.prisma.work.findFirst({
      where:{id:id},
      include:{workBlogTags:{
        include:{
          Tag:true,
          Work:true
        }
      }}
    })
    if(!find) return new Work()
    return find
  }

  async update(id: string, updateWorkInput: UpdateWorkInput) : Promise<Work> {
    const find = await this.prisma.work.findFirst({
      where:{id:id},
    })
    if(!find) return new Work()
    return await this.prisma.work.update({
      where:{id:id},
      data:{
        description:updateWorkInput.description,
        picture:updateWorkInput.picture,
        title:updateWorkInput.title
      },
      include:{workBlogTags:{
        include:{
          Tag:true,
          Work:true
        }
      }}
    })
  }

  async remove(id: string) : Promise<Work> {
    const find = await this.prisma.work.findFirst({
      where:{id:id},
    })
    if(!find) return new Work()
    return await this.prisma.work.delete({
      where:{id:id},
      include:{workBlogTags:{
        include:{
          Tag:true,
          Work:true
        }
      }}
    })
  }
}
