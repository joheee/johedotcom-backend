import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileInput } from './dto/create-profile.input';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private prisma:PrismaService){}

  async create(createProfileInput: CreateProfileInput) : Promise<Profile> {
    if(!createProfileInput.description || !createProfileInput.opening || !createProfileInput.picture || !createProfileInput.logo) return new Profile()

    return await this.prisma.profile.create({
      data:{
        description:createProfileInput.description,
        opening:createProfileInput.opening,
        picture:createProfileInput.picture,
        logo:createProfileInput.logo
      }
    });
  }

  async getProfile() : Promise<Profile> {
    const profile = await this.prisma.profile.findFirst()
    if(!profile) return new Profile() 
    return profile;
  }

  async update(updateProfileInput: CreateProfileInput) :Promise<Profile> {
    const find = await this.prisma.profile.findFirst()
    if(!find) return new Profile()
    return await this.prisma.profile.update({
      where:{id:find.id},
      data:{
        description:updateProfileInput.description,
        opening:updateProfileInput.opening,
        picture:updateProfileInput.picture,
        logo:updateProfileInput.logo
      }
    })
  }
}
