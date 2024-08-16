import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  create(createCatDto: CreateCatDto) {
    console.log('create cat', createCatDto);
    return 'This action adds a new cat';
  }

  findAll() {
    return `This action returns all cats`;
  }

  findBreed(breed: string) {
    return `This action returns all cats of breed ${breed}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
