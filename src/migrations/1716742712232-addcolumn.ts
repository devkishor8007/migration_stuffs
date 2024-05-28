import { MigrationInterface, QueryRunner } from "typeorm";

export class Ioab1716742712232 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log("s");
    await queryRunner.query(
      `ALTER TABLE "user" ADD COLUMN "phone" VARCHAR(25)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
