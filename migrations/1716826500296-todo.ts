import { MigrationInterface, QueryRunner } from "typeorm";

export class Todo1716826500296 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE todo(
            id varchar(36) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,        
            title text,
            status varchar(255) NOT NULL DEFAULT 'PENDING',
            PRIMARY KEY (id)
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE todo`);
    }

}
