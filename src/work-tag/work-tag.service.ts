import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorkTagInput } from './dto/create-work-tag.input';
import { UpdateWorkTagInput } from './dto/update-work-tag.input';
import { WorkTag } from './entities/work-tag.entity';

@Injectable()
export class WorkTagService {
  constructor(private prisma:PrismaService){}

  async create(createWorkTagInput: CreateWorkTagInput) :Promise<WorkTag> {
    if(!createWorkTagInput.tagId || !createWorkTagInput.workId) return new WorkTag()
    return this.prisma.workTag.create({
      data:{
        tagId:createWorkTagInput.tagId,
        workId:createWorkTagInput.workId
      }
    })
  }

  async update(id: string, updateWorkTagInput: UpdateWorkTagInput) : Promise<WorkTag> {
    const find = await this.prisma.workTag.findFirst({
      where:{id:id}
    })
    if(!find) return new WorkTag()
    return this.prisma.workTag.update({
      where:{id:id},
      data:{
        tagId:updateWorkTagInput.tagId,
        workId:updateWorkTagInput.workId
      }
    })
  }

  async remove(id: string) : Promise<WorkTag> {
    const find = await this.prisma.workTag.findFirst({
      where:{id:id}
    })
    if(!find) return new WorkTag()
    return this.prisma.workTag.delete({
      where:{id:id}
    })
  }
}
