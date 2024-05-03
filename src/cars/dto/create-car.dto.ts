import { IsString } from 'class-validator';

export class CreateCartDto {
  @IsString()
  readonly model: string;

  @IsString()
  readonly brand: string;
}
