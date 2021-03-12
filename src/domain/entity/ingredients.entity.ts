import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinTable,
    ManyToMany,
  } from 'typeorm';
import { RecipeEntity } from './recipe.entity';
  
  @Entity('ingredients')
  export class IngredientsEntity {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    name!: string;
  
    @Column()
    cost!: boolean;

    @ManyToMany(type => RecipeEntity, { cascade: true })
    @JoinTable({
        name: 'recipe_ingredients',
        joinColumn: { name: 'ingredient_id', referencedColumnName: 'id' },
        inverseJoinColumn: {name: 'recipe_id', referencedColumnName: 'id' },
    })
    recipe!: RecipeEntity[];
  
    @CreateDateColumn({ select: false, name: 'created_at' })
    created!: Date;
  
    @UpdateDateColumn({ select: false, name: 'updated_at' })
    updated!: Date;
  }
  