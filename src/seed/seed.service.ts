import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly CarService: CarsService,
    private readonly BrandService: BrandsService,
  ) {}

  populateDB() {
    this.CarService.fillCarsWithSeedData(CARS_SEED);
    this.BrandService.fillbrandsWithSeedData(BRANDS_SEED);
    return 'seed executed';
  }
}
