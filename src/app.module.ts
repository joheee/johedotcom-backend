import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProfileModule } from './profile/profile.module';
import { SocialmediaModule } from './socialmedia/socialmedia.module';
import { WorkModule } from './work/work.module';
import { TagModule } from './tag/tag.module';
import { WorkBlogTagModule } from './work-blog-tag/work-blog-tag.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    })    
    ,PrismaModule, ProfileModule, SocialmediaModule, WorkModule, TagModule, WorkBlogTagModule, BlogModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
}) 
export class AppModule {} 
