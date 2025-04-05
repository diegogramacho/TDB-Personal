import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, Length} from "class-validator";

export class CreateUserDto {
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @Length(3)
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @Length(8)
    @IsAlphanumeric()
    @IsNotEmpty()
    password: string;
  }
      