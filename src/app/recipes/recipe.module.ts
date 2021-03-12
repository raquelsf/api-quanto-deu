import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from 'src/domain/entity/recipe.entity';
import { RecipeService } from 'src/domain/service/recipe/recipe.service';
import { RecipesController } from './recipes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([RecipeEntity])],
    controllers: [RecipesController],
    providers: [RecipeService],
  })
export class RecipeModule {}
