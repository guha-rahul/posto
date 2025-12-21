import {Exclude, Expose} from 'class-transformer';
import { UserRole } from '../user.entity';

@Exclude()
export class UserResponseDto{
    @Expose()
    id:string;

    @Expose()
    email:string;

    @Expose()
    username: string;

    @Expose()
    role: UserRole;

    @Expose()
    avatarUrl: string;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}