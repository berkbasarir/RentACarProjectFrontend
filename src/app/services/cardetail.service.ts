import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44351/api/";

  GetCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}cars/getdetail`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
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
}