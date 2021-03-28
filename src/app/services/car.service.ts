import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44351/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getallcarsdetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  GetCarDetailsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}cars/getdetailbybrandid?brandId=${brandId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  GetCarDetailByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}cars/getdetailbycolorid?colorId=${colorId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  GetCarDetailByCarId(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}cars/getdetailbycarid?carId=${carId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add", car)
  }

}