import { IsNotEmpty, IsString, Length } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(10, 20)
  firstName!: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  lastName!: string;
}
