import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./features/login/login.component";
import {AccountComponent} from "./features/account/account.component";
import {TransactionComponent} from "./features/transaction/transaction.component";

const appRoutes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: AccountComponent},
  {path: 'transaction/:id', component: TransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

