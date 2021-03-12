import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class RecipeIngedientsMigrations1611848379743 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'recipe_ingredients',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generatedType: 'STORED',
            generationStrategy: 'increment',
          },
          {
            name: 'recipe_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'ingredient_id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
            onUpdate: 'now()',
          },
        ],
      }),
      true,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('recipe', true, true, true);
  }
}
