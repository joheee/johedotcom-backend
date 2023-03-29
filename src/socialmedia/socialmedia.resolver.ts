import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SocialmediaService } from './socialmedia.service';
import { Socialmedia } from './entities/socialmedia.entity';
import { CreateSocialmediaInput } from './dto/create-socialmedia.input';
import { UpdateSocialmediaInput } from './dto/update-socialmedia.input';

@Resolver(() => Socialmedia)
export class SocialmediaResolver {
  constructor(private readonly socialmediaService: SocialmediaService) {}

  @Mutation(() => Socialmedia)
  createSocialmedia(@Args('createSocialmediaInput') createSocialmediaInput: CreateSocialmediaInput) {
    return this.socialmediaService.create(createSocialmediaInput);
  }

  @Query(() => [Socialmedia], { name: 'socialmedias' })
  findAll() {
    return this.socialmediaService.findAll();
  }

  @Query(() => Socialmedia, { name: 'socialmedia' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.socialmediaService.findOne(id);
  }

  @Mutation(() => Socialmedia)
  updateSocialmedia(@Args('updateSocialmediaInput') updateSocialmediaInput: UpdateSocialmediaInput) {
    return this.socialmediaService.update(updateSocialmediaInput.id, updateSocialmediaInput);
  }

  @Mutation(() => Socialmedia)
  removeSocialmedia(@Args('id', { type: () => String }) id: string) {
    return this.socialmediaService.remove(id);
  }
}
