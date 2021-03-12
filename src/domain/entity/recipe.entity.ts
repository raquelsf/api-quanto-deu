import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinColumn,
    JoinTable,
  } from 'typeorm';
import { IngredientsEntity } from './ingredients.entity';
  
  @Entity('recipe')
  export class RecipeEntity {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    name!: string;
  
    @Column()
    cost!: string;

    @ManyToMany(type => IngredientsEntity, { cascade: true, nullable: true })
    @JoinTable({
        name: 'recipe_ingredients',
        joinColumn: { name: 'recipe_id', referencedColumnName: 'id'},
        inverseJoinColumn: { name: 'ingredient_id', referencedColumnName: 'id'},
    })
    ingredients?: IngredientsEntity[];
  
    @CreateDateColumn({ select: false, name: 'created_at' })
    created!: Date;
  
    @UpdateDateColumn({ select: false, name: 'updated_at' })
    updated!: Date;
  }
  