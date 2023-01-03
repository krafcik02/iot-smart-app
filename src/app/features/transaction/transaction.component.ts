import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactions = [];
  constructor(private transactionService: TransactionsService, private activatedRoute: ActivatedRoute) {
  }

  transaction:{
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
  } | undefined;

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    let id = this.activatedRoute.snapshot.params['id'];
    this.transactionService.getCustomerTransactions().subscribe((res )=>{
      console.log(res.content);
      // @ts-ignore
      this.transactions = res.content;
      // @ts-ignore
      this.transaction = this.transactions.filter((value) => value.id === Number(id))[0];
      console.log(this.transaction)
    });
  }

}
