import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCartDto } from './dto/create-car.dto';

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
  @UsePipes(ValidationPipe)
  createCart(@Body() CreateCartDto: CreateCartDto) {
    return CreateCartDto;
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
