import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { CreateProfileInput } from './dto/create-profile.input';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Mutation(() => Profile)
  createProfile(@Args('createProfileInput') createProfileInput: CreateProfileInput) {
    return this.profileService.create(createProfileInput);
  }

  @Query(() => Profile, { name: 'profile' })
  getProfile() {
    return this.profileService.getProfile();
  }

  @Mutation(() => Profile)
  updateProfile(@Args('updateProfileInput') updateProfileInput: CreateProfileInput) {
    return this.profileService.update(updateProfileInput);
  }
}
