import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PizzaEntity } from './entities/pizza.entity';
import { Public } from 'src/decorators/public.decorator';

@Public()
@Controller('pizzas')
@ApiTags('pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Post()
  @ApiCreatedResponse({ type: PizzaEntity })
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzasService.create(createPizzaDto);
  }

  @Get()
  @ApiOkResponse({ type: PizzaEntity, isArray: true })
  async findAll(@Query('kind') kind: string = 'all') {
    const pizzas = await this.pizzasService.findAll(kind);
    return pizzas;
  }

  @Get(':id')
  @ApiOkResponse({ type: PizzaEntity })
  findOne(@Param('id') id: string) {
    return this.pizzasService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PizzaEntity })
  update(@Param('id') id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
    return this.pizzasService.update(id, updatePizzaDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PizzaEntity })
  remove(@Param('id') id: string) {
    return this.pizzasService.remove(id);
  }
}
