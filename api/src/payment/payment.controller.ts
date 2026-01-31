import { Body, Controller, Post } from "@nestjs/common";
import { PaymentsService } from "./payment.service";


@Controller('payment')
export class PaymentsController {
        constructor(private readonly paymentService: PaymentsService){

        }       

        @Post('intent')
        createIntent(@Body('amount') amount: number){

        }

}
