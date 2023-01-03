import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Constants} from "../constants/constants";

@Injectable({providedIn: 'root'})
export class TransactionsService{

  constructor(private http: HttpClient) {
  }

  getCustomerTransactions(){
    return this.http.post<{content: {
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
      }[],empty:any,first:any,last:any,number:any,numberOfElements:any,pageable:any,size:any,sort:any,totalElements:any,totalPages:any}>
    (Constants.API_URL+'transaction/list',{customer:{id: 1 }});
  }
}
