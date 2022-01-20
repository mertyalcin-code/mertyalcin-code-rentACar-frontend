import { SingleResponseModel } from './../models/responseModels/singleResponseModel';
import { InvoiceCorporateCustomerListModel } from './../models/listModels/invoiceCorporateCustomerListModel';
import { InvoiceIndividualListModel } from './../models/listModels/invoiceIndividualListModel';
import { ListResponseModel } from './../models/responseModels/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl: string = environment.baseUrl;
  private  apiUrl: string = this.baseUrl + "invoices/"
 constructor(private httpClient: HttpClient) { }

 findByRentalIdForIndividualCustomer(id:number): Observable<SingleResponseModel<InvoiceIndividualListModel>>{ 
   return this.httpClient.get<SingleResponseModel<InvoiceIndividualListModel>>(this.apiUrl+"find-invoice-for-individual-customer/"+id)
 }
 findByRentalIdForCorporateCustomer(id:number): Observable<SingleResponseModel<InvoiceCorporateCustomerListModel>>{ 
   return this.httpClient.get<SingleResponseModel<InvoiceCorporateCustomerListModel>>(this.apiUrl+"find-invoice-for-corporate-customer/"+id)
 }
}