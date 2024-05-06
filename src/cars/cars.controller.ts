import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCartDto } from './dto/create-car.dto';
import { UpdateCartDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  private cars = ['Toyoda', 'Honda', 'Jeep'];

  constructor(private readonly CarsService: CarsService) {}

  @Get()
  getAllCards() {
    return this.CarsService.findAll();
  }

  @Get(':id')
  getCardbyId(@Param('id', ParseUUIDPipe) id: string) {
    return this.CarsService.findOneById(id);
  }

  @Post()
  createCart(@Body() CreateCartDto: CreateCartDto) {
    return this.CarsService.create(CreateCartDto);
  }

  @Patch(':id')
  updateCart(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() UpdateCartDto: UpdateCartDto,
  ) {
    return this.CarsService.update(id, UpdateCartDto);
  }

  @Delete(':id')
  deleteCart(@Param('id', ParseUUIDPipe) id: string) {
    return this.CarsService.delete(id);
  }
}
