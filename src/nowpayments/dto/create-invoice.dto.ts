import { IsEmpty, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateInvoiceDto {

    @IsNumber()
    price_amount:number

    @IsString()
    price_currency:string

    @IsString()
    pay_currency:string

    @IsString()
    ipn_callback_url:string

    @IsString()
    order_id:string

    @IsString()
    order_description:string

}