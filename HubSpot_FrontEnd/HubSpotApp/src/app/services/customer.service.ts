import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer/Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  delUrl:String="http://localhost:8080/api/v1/delete";
  constructor(private http:HttpClient) { }
  getCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:8080/api/v1/getAllcus");
  }
  // getCustomerList():Observable<Customer[]>{
  //   return this.http.get<Customer[]>("http://localhost:8080/api/v1/getAllcus");
  // }
  addCustomer(cObj:Customer):Observable<Customer>{
    return this.http.post<Customer>("http://localhost:8080/api/v1/addCustomer",cObj);
  }
  deleteCustomer(id:any):Observable<Customer>{
    return this.http.delete<Customer>(`${this.delUrl}/${id}`);
  }
}
