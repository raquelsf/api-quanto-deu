import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IngredientsEntity } from 'src/domain/entity/ingredients.entity';
import { RecipeEntity } from 'src/domain/entity/recipe.entity';

require('dotenv').config();

export const typeOrmMysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '', 10) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_USER_PASS,
  database: process.env.MYSQL_DB_NAME,
  entities: [RecipeEntity, IngredientsEntity],
  logging: false,
  logger: 'file',
};