import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignUp {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    name: string;
    @IsNotEmpty()
    rules: string;
}