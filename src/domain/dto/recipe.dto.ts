import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';
import { IngredientsEntity } from '../entity/ingredients.entity';

export class RecipeDto {
  @IsNotEmpty({ message: 'Nome da receita é obrigatório' })
  @ApiProperty({ example: 'Bolo de Chocolate', description: 'Nome da receita' })
  name!: string;

  @IsNotEmpty({ message: 'Custo da receita é obrigatório' })
  @ApiProperty({ example: '22.00', description: 'Custo da receita' })
  cost?: string;

  ingredients?: IngredientsEntity[];
}
