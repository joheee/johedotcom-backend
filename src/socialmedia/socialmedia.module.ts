import { Module } from '@nestjs/common';
import { SocialmediaService } from './socialmedia.service';
import { SocialmediaResolver } from './socialmedia.resolver';

@Module({
  providers: [SocialmediaResolver, SocialmediaService]
})
export class SocialmediaModule {}
