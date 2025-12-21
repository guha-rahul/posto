import { IsOptional, IsString} from 'class-Validator';

export class UpdateUserDto{
    @IsOptional()
    @IsString()
    bio?: string;

    @IsOptional()
    @IsString()
    avatarUrl?:string;

    @IsOptional()
    @IsString()
    username?: string;
}