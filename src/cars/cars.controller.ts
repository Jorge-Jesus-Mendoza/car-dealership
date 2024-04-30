import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  private cars = ['Toyoda', 'Honda', 'Jeep'];

  constructor(private readonly CarsService: CarsService) {}

  @Get()
  getAllCards() {
    return this.CarsService.findAll();
  }

  @Get(':id')
  getCardbyId(@Param('id', ParseIntPipe) id: number) {
    return this.CarsService.findOneById(id);
  }

  @Post()
  createCart(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCart(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Patch()
  deleteCart(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
