import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CardetailService } from 'src/app/services/car-detail.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  Cars: CarDetail[] = [];
  dataLoaded = false;
  filterText="";

  constructor(
    private carDetailService: CardetailService, 
    private activatedRoute: ActivatedRoute, 
    private toastrService: ToastrService,
    private cartService: CartService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.GetCarDetailsByBrand(params["brandId"])
      } else if (params["colorId"]) {
        this.GetCarDetailsByColor(params["colorId"]);
      } else {
        this.GetCarDetails();
      }
    })
  }

  GetCarDetails() {
    this.carDetailService.GetCarDetails().subscribe(cardetails => {
      this.Cars = cardetails.data;
      this.dataLoaded = true;
    })
  }

  GetCarDetailsByBrand(brandId: number) {
    this.carDetailService.GetCarDetailsByBrand(brandId).subscribe(cardetails => {
      this.Cars = cardetails.data;
      console.log(cardetails)
      this.dataLoaded = true;
    })
  }

  GetCarDetailsByColor(colorId: number) {
    this.carDetailService.GetCarDetailByColor(colorId).subscribe(cardetails => {
      this.Cars = cardetails.data;
      this.dataLoaded = true;
    })
  }

  addToCart(car:CarDetail){    
    if(car.carId===3){
      this.toastrService.error(car.description, "Error")
    }else{
      this.toastrService.success(car.description, "Added")
      this.cartService.addToCart(car);
    }      
  }

  staticFilesUrl = "https://localhost:44351/uploads/";

  SetImage(Car:CarDetail){
    if (Car.imagePath.length>0) {
      return `${this.staticFilesUrl}${Car.imagePath}`;
    }else{
      return `${this.staticFilesUrl}default.jpg`;
    }
  }

}