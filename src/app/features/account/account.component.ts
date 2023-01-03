import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../dto/Customer";
import {TransactionsService} from "../../services/transactions.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  // transactions = [
  //   {id: 1, store: "Lidl", storeType: "Market", price: 0.7256},
  //   {id: 1, store: "Lidl", storeType: "Market", price: 0.7256},
  //   {id: 1, store: "Lidl", storeType: "Market", price: 0.7256},
  //   {id: 1, store: "Lidl", storeType: "Market", price: 0.7256},
  //   {id: 1, store: "Lidl", storeType: "Market", price: 0.7256},
  //   {id: 1, store: "Lidl", storeType: "Market", price: 0.7256},
  //   {id: 1, store: "Lidl", storeType: "Market", price: 0.7256},
  //   {id: 1, store: "Lidl", storeType: "Market", price: 0.7256},
  // ]

  balance: number | undefined;
  transactions:{
    createDate:any,
    customer:
      {id: any, number: any, name: any, lastname: any, balance: any,countOfActiveTransactions
          :any},
    dueDate:any,
    id:any,
    interest:any,
    intervalDueDate:any,
    isPaid:any,
    paidOffIntervals:any,
    payment:any,
    paymentInterval:any,
    totalAmount:any,
    totalPayments:any,
    updateDate: any
  }[] | undefined;
  constructor(private router: Router,
              private accountService: CustomerService,
              private transactionService: TransactionsService) {
  }

  ngOnInit(): void {
    this.accountService.getCustomer().subscribe((res:Customer)=>{
      this.balance = res?.balance;
    });
    this.transactionService.getCustomerTransactions().subscribe((res )=>{
      console.log(res.content);
      this.transactions = res.content;


    });
  }


}
