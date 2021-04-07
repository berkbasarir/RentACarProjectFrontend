import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl = "https://localhost:44351/api/cars";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "/getallcarsdetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetail(): Observable<ListResponseModel<CarDetail>> {
    let newPath: string = this.apiUrl + "/getallcarsdetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
 }

  GetCarDetailsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}/getdetailbybrandid?brandId=${brandId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  GetCarDetailByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}/getdetailbycolorid?colorId=${colorId}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  GetCarDetailByCarId(id: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = `${this.apiUrl}/getdetailbycarid?carId=${id}`;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarById(id: number): Observable<SingleResponseModel<Car>> {
    let newPath: string = this.apiUrl + 'getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
 }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/add", car)
  }

  update(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/update", car);
 }

}