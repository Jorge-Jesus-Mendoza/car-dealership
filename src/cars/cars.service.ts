import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCartDto, UpdateCartDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corola',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car)
      throw new NotFoundException(`Cannot found the car with the id '${id}'`);

    return car;
  }

  create(CreateCartDto: CreateCartDto) {
    const car: Car = {
      id: uuid(),
      ...CreateCartDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCartDto: UpdateCartDto) {}
}
