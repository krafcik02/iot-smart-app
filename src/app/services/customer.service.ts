import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Constants} from "../constants/constants";
import {Customer} from "../dto/Customer";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomer(): Observable<Customer>{
    return this.http.get<Customer>(Constants.API_URL + 'customer/1',);
  }
}
