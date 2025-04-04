
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('auth')
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id  // FK

  @Column()
  token

  @Column()
  expireAt

  @Column()
  revoked

  @Column()
  createAt

  @Column()
  updateAt
}