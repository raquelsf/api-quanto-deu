import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthController } from './app/health/health.controller';
import { RecipeModule } from './app/recipes/recipe.module';
import { typeOrmMysqlConfig } from './config/database';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmMysqlConfig),
    ConfigModule.forRoot(),
    TerminusModule,
    RecipeModule
  ],
  controllers: [HealthController],
})
export class AppModule {}
