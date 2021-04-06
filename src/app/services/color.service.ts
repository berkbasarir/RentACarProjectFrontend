import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44351/api/colors";

  constructor(private httpClient: HttpClient) { }
  

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + "/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/add", color)
  }

  update(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/update", color);
  }

  getColorById(colorId: number): Observable<SingleResponseModel<Color>> {
    let newPath = this.apiUrl + '/getbyid?id=' + colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
 }

}