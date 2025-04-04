import { MongoExpiredSessionError } from "typeorm"

import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('auth')
export class OtpVerification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id   // FK

  @Column()
  otp

  @Column()
  medium

  @Column()
  sent_to

  @Column()
  expires_at

  @Column()
  used

  @Column()
  createAt

  @Column()
  updateAt
}