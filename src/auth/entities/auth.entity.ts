import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id  // FK

  @Column() 
  passwordHash  // hash password only for local registration

  @Column()
  authProvider // 'local', 'google', 'github', 'facebook'

  @Column()
  isVerfied // true false

  @Column()
  lastLoginAt // datetime for audit use

  @Column()
  createAt

  @Column()
  updateAt
}
