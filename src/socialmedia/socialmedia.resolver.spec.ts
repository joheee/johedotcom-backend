import { Test, TestingModule } from '@nestjs/testing';
import { SocialmediaResolver } from './socialmedia.resolver';
import { SocialmediaService } from './socialmedia.service';

describe('SocialmediaResolver', () => {
  let resolver: SocialmediaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialmediaResolver, SocialmediaService],
    }).compile();

    resolver = module.get<SocialmediaResolver>(SocialmediaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
