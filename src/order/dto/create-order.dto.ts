import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    user_id: number;
    product_id: number;
    qt: string;
    total: string;
    tanggal: number;
    status: string;
}
