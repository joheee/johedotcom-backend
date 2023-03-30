import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
  constructor(private prisma:PrismaService){}

  async create(createBlogInput: CreateBlogInput) : Promise<Blog> {
    if(!createBlogInput.description || !createBlogInput.title || !createBlogInput.url) return new Blog()
    return this.prisma.blog.create({
      data:{
        description:createBlogInput.description,
        title:createBlogInput.title,
        url:createBlogInput.url
      }
    })
  }

  async findAll() : Promise<Blog[]> {
    return await this.prisma.blog.findMany({
      include:{workBlogTags:{
        include:{
          Blog:true,
          Tag:true
        }
      }}
    })
  }

  async findOne(id: string) : Promise<Blog> {
    const find = await this.prisma.blog.findFirst({
      where:{id:id},
      include:{workBlogTags:{
        include:{
          Blog:true,
          Tag:true
        }
      }}
    })
    if(!find) return new Blog()
    return find
  }

  async update(id: string, updateBlogInput: UpdateBlogInput) : Promise<Blog> {
    const find = await this.prisma.blog.findFirst({
      where:{id:id},
      include:{workBlogTags:{
        include:{
          Blog:true,
          Tag:true
        }
      }}
    })
    if(!find) return new Blog()
    return await this.prisma.blog.update({
      where:{id:id},
      data:{
        description:updateBlogInput.description,
        title:updateBlogInput.title,
        url:updateBlogInput.url
      },
      include:{workBlogTags:{
        include:{
          Blog:true,
          Tag:true
        }
      }}
    })
  }

  async remove(id: string) : Promise<Blog> {
    const find = await this.prisma.blog.findFirst({
      where:{id:id},
      include:{workBlogTags:{
        include:{
          Blog:true,
          Tag:true
        }
      }}
    })
    if(!find) return new Blog()
    return await this.prisma.blog.delete({
      where:{id:id},
      include:{workBlogTags:{
        include:{
          Blog:true,
          Tag:true
        }
      }}
    })
  }
}
