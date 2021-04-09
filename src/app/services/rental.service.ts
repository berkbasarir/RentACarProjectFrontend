import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rental } from '../models/rental';
import { RentDetail } from '../models/rentDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
   providedIn: 'root'
})

export class RentalService {

   apiUrl: string = 'https://localhost:44351/api/rentals/';
   rentingCar: Rental;

   constructor(private httpClient: HttpClient) {
      this.getRentals();
   }

   getRentals(): Observable<ListResponseModel<RentDetail>> {
      return this.httpClient.get<ListResponseModel<RentDetail>>(this.apiUrl);
   }

   getRentalsByCarId(carId: number): Observable<ListResponseModel<Rental>> {
      let newPath = this.apiUrl + 'get-rental-by-carid?carId=' + carId;
      return this.httpClient.get<ListResponseModel<Rental>>(newPath);
   }

   setRentingCar(rental: Rental) {
      this.rentingCar = rental;
   }

   getRentingCar() {
      return this.rentingCar;
   }

   removeRentingCar() {
      this.rentingCar = null
   }

   add(rental: Rental): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, rental);
   }
}