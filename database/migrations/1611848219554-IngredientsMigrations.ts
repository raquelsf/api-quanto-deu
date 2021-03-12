import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';
export class IngredientsMigrations1611848419554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'ingredients',
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
            name: 'name',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'qtd',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'unity',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'cost',
            type: 'varchar',
            length: '255',
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ingredients', true, true, true);
  }
}
