import { Test, TestingModule } from '@nestjs/testing';
import { SocialmediaService } from './socialmedia.service';

describe('SocialmediaService', () => {
  let service: SocialmediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialmediaService],
    }).compile();

    service = module.get<SocialmediaService>(SocialmediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
