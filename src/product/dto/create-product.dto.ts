import { IsNotEmpty } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    price: string;
    @IsNotEmpty()
    description: string;
    category: string;
    image: string;
    rate: string;
    count: string;
}
