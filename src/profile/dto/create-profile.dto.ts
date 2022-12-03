import { IsEmail, IsNotEmpty, IsNumber, } from "class-validator";

export class CreateProfileDto {
    @IsNotEmpty()
    @IsNumber()
    user_id: number;
    nama: string
    @IsEmail()
    email: string
    @IsNumber()
    phone: string
    address: string
    city: string
    state: string
    zip: string
    country: string
    image: string
}
