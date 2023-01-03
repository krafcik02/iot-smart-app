import {Customer} from "./Customer";

export interface Transaction {
    id: number ;
    createDate: Date ;
    updateDate: Date ;
    paymentInterval: string ;

  intervalDueDate: Date ;

  dueDate: Date ;

  interest:number ;

  totalPayments: number ;

  totalAmount: number ;

  paidOffIntervals: number ;

  payment: number;

  isPaid: boolean;

  customer: Customer;
}
