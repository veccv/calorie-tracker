import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FoodItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("float")
  kcal!: number;

  @Column("float")
  fat!: number;

  @Column("float")
  carbs!: number;

  @Column("float")
  sugar!: number;
}
