import { Body, Controller, Get, Param, Post, Put, UseFilters } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RecipeDto } from 'src/domain/dto/recipe.dto';
import { RecipeService } from 'src/domain/service/recipe/recipe.service';

@Controller('recipes')
export class RecipesController {
    constructor(private recipeService: RecipeService) {
    }

    @Get()
    @ApiOperation({ summary: 'Busca todos as receitas' })
    @ApiResponse({ status: 200, description: 'Todos os receitas cadastrados' })
    async getAll() {
        return await this.recipeService.getAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Busca receita por id' })
    @ApiResponse({ status: 200, description: 'Receita encontrada' })
    @ApiResponse({ status: 404, description: 'Nenhuma receita encontrada' })
    async getById(@Param('id') id: number) {
      return await this.recipeService.getById(id);
    }
  
    @Post()
    @ApiOperation({ summary: 'Cadastro de receita' })
    @ApiResponse({ status: 201, description: 'receita cadastrada' })
    async create(@Body() data: RecipeDto) {
      return await this.recipeService.create(data);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Atualiza receita por id' })
    @ApiResponse({ status: 200, description: 'receita atualizado' })
    @ApiResponse({ status: 404, description: 'Nenhum receita encontrado com o id informado' })
    async update(@Param('id') id: number, @Body() data: RecipeDto) {
      return await this.recipeService.update(id, data);
    }
}
