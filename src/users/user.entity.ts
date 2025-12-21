import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

export enum UserRole{
    USER = 'USER',
    WRITER = 'WRITER',
    EDITOR = 'EDITOR',
    ADMIN = 'ADMIN'
}

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique:true, nullable:false})
    email: string;

    @Column({nullable:false})
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default:UserRole.USER,
    })
    role:UserRole;

    @Column({nullable:true})
    bio: string;

    @Column({nullable:true})
    avatarUrl: string;

    @CreateDateColumn()
    CreatedAt: Date;

    @UpdateDateColumn()
    UpdatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()

    async hashPassword(){
        if (this.password && !this.password.startsWith('$2b$')){
            this.password=await bcrypt.hash(this.password, 10);

        }
    }

    async validatePassword(password: string): Promise<boolean>{
        return bcrypt.compare(password, this.password);

    }
}


