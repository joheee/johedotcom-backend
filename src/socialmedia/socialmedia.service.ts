import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSocialmediaInput } from './dto/create-socialmedia.input';
import { UpdateSocialmediaInput } from './dto/update-socialmedia.input';
import { Socialmedia } from './entities/socialmedia.entity';

@Injectable()
export class SocialmediaService {
  constructor(private prisma:PrismaService) {}
  
  async create(createSocialmediaInput: CreateSocialmediaInput) : Promise<Socialmedia> {
    if(!createSocialmediaInput.url || !createSocialmediaInput.username) return new Socialmedia()
    return await this.prisma.socialMedia.create({
      data:{
        url:createSocialmediaInput.url as string,
        username:createSocialmediaInput.username as string
      }
    })
  }

  async findAll() : Promise<Socialmedia[]> {
    return await this.prisma.socialMedia.findMany()
  }

  async findOne(id: string) : Promise<Socialmedia> {
    const find = await this.prisma.socialMedia.findFirst({
      where:{
        id:id
      }
    })
    if(!find) return new Socialmedia()
    return find
  }

  async update(id: string, updateSocialmediaInput: UpdateSocialmediaInput) : Promise<Socialmedia> {
    const find = await this.prisma.socialMedia.findFirst({
      where:{
        id:id
      }
    })
    if(!find) return new Socialmedia()
    return await this.prisma.socialMedia.update({
      where:{
        id:id
      }, data:{
        url:updateSocialmediaInput.url as string,
        username:updateSocialmediaInput.username as string
      }
    })
  }

  async remove(id: string) : Promise<Socialmedia> {
    const find = await this.prisma.socialMedia.findFirst({
      where:{
        id:id   
      }
    })
    if(!find) return new Socialmedia()
    return this.prisma.socialMedia.delete({
      where:{
        id:id 
      }
    })
  }
}
