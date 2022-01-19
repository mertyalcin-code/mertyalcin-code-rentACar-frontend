import { CarMaintenanceListModel } from './../models/listModels/carMaintenanceListModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from './../models/responseModels/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { ListResponseModel } from './../models/responseModels/listResponseModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarMaintenanceService {

  private baseUrl: string = environment.baseUrl;
  private  apiUrl: string = this.baseUrl + "car-maintenances/"
 constructor(private httpClient: HttpClient) { }

 findAll(): Observable<ListResponseModel<CarMaintenanceListModel>>{ 
   return this.httpClient.get<ListResponseModel<CarMaintenanceListModel>>(this.apiUrl+"find-all")
 }
 findAllByCarId(carId:number): Observable<ListResponseModel<CarMaintenanceListModel>>{ 
  return this.httpClient.get<ListResponseModel<CarMaintenanceListModel>>(this.apiUrl+"find-all-by-car-id/"+carId)
}
 findById(id:number): Observable<SingleResponseModel<CarMaintenanceListModel>>{ 
   return this.httpClient.get<SingleResponseModel<CarMaintenanceListModel>>(this.apiUrl+"find-by-id/"+id)
 }
}