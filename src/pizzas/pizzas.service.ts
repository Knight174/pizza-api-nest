import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PizzasService {
  constructor(private prisma: PrismaService) {}

  create(createPizzaDto: CreatePizzaDto) {
    return 'This action adds a new pizza';
  }

  findAll() {
    return this.prisma.pizza.findMany();
  }

  findOne(id: string) {
    return this.prisma.pizza.findUnique({ where: { id } });
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return `This action updates a #${id} pizza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizza`;
  }
}
