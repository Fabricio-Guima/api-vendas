import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("UserToken")
class UserToken {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  //gerando uuid se sem primary key
  @Column()
  @Generated("uuid")
  token: string;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserToken;
