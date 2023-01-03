import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent implements OnInit {

  @Input() transaction:any ;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  openTransaction(id: number) {
    this.router.navigate([`/transaction/${id}`]);
  }
}
