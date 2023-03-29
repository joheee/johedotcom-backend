import { Injectable } from '@nestjs/common';
import { CreateWorkInput } from './dto/create-work.input';
import { UpdateWorkInput } from './dto/update-work.input';

@Injectable()
export class WorkService {
  create(createWorkInput: CreateWorkInput) {
    return 'This action adds a new work';
  }

  findAll() {
    return `This action returns all work`;
  }

  findOne(id: string) {
    return `This action returns a #${id} work`;
  }

  update(id: string, updateWorkInput: UpdateWorkInput) {
    return `This action updates a #${id} work`;
  }

  remove(id: string) {
    return `This action removes a #${id} work`;
  }
}
