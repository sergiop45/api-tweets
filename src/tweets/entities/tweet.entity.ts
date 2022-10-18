import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('text')
  content: string;
}
