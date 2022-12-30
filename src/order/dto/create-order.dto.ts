import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    user_id: number;
    product_id: number;
    qt: string;
    total: string;
    tanggal: string;
    status: string;
}
