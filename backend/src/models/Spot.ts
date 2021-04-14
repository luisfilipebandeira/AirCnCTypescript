import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';

import Users from './Users';

@Entity('spots')
export default class Spots{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    thumbnail: string;
    
    @Column()
    company: string;

    @Column('decimal')
    price: number;

    @Column("text")
    techs: string;

    @Column()
    user_id: string

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'user_id' })
    user: Users;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}   