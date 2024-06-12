import { NowpaymentsService } from './nowpayments.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
export declare class NowpaymentsController {
    private readonly nowpaymentsService;
    constructor(nowpaymentsService: NowpaymentsService);
    apiStatus(): Promise<any>;
    createInvoice(createInvoiceDto: CreateInvoiceDto): Promise<any>;
    Auth(body: {}): Promise<any>;
    currencies(): Promise<any>;
}
