import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { Card } from '../models/card';

@Injectable({
   providedIn: 'root'
})

export class CardService {

   private apiUrl = 'https://localhost:44351/api/cards';

   constructor(private httpClient: HttpClient) {
   }

   add(card: Card): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl + "/add", card);
   }

   getByCustomerId(customerId: number): Observable<ListResponseModel<Card>> {
      let newPath = this.apiUrl + "/getcardsbycustomerid?customerId=" + customerId;
      return this.httpClient.get<ListResponseModel<Card>>(newPath);
   }
}