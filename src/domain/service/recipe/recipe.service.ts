import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipeDto } from 'src/domain/dto/recipe.dto';
import { IngredientsEntity } from 'src/domain/entity/ingredients.entity';
import { RecipeEntity } from 'src/domain/entity/recipe.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(RecipeEntity)
        private repository: Repository<RecipeEntity>,
    ) { }

    
  async getAll(): Promise<Array<RecipeEntity>> {
    return await this.repository.find({});
  }

  async getById(id: number): Promise<RecipeEntity> {
    return await this.repository.findOneOrFail(id, {
      relations: ['ingredients'],
    });
  }

  async getByNome(nome: string): Promise<Array<RecipeEntity>> {
    return await this.repository.find({
      where: { nome  : Like(`%${nome}%`) },
      relations: ['ingredients'],
    });
  }

  async create(recipeDto: RecipeDto): Promise<RecipeEntity> {
    const entity = this.createEntity(recipeDto);
    await this.repository.save(entity);
    return await this.getById(entity.id);
  }

  async update(id: number, recipeDto: RecipeDto): Promise<void> {
    await this.repository.findOneOrFail({ id });
    const recipe = { ...this.createEntity(recipeDto), id };
    await this.repository.save(recipe);
  }


  async delete(id: number): Promise<void> {
    const recipe = await this.repository.findOneOrFail({ id });
    await this.repository.remove(recipe);
  }

  private createEntity(data: RecipeDto) {
    const recipe = new RecipeEntity();
    recipe.name = data.name;
    recipe.cost = data.cost;
    recipe.ingredients = data.ingredients;
    return this.repository.create(recipe);
  }

  private createIngredient(id: number) {
    return { id: id } as IngredientsEntity;
  }

}
