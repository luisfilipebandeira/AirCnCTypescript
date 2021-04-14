import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
import Spots from './Spot';

import Users from './Users';

@Entity('booking')
export default class Booking{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    date: string;
    
    @Column()
    approved: boolean;

    @Column()
    user_id: string

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'user_id' })
    user: Users;

    @Column()
    spot_id: string

    @ManyToOne(() => Spots)
    @JoinColumn({ name: 'spot_id' })
    spot: Spots;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}   