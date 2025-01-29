import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1738160854147 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "user" (
          "id" SERIAL PRIMARY KEY,
          "email" VARCHAR(500) NOT NULL,
          "password" VARCHAR(255) NOT NULL
        );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    `DROP TABLE user CASCADE`;
  }
}
