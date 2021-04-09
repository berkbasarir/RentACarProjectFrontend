import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { Image } from 'src/app/models/image';
import { AuthService } from 'src/app/services/auth.service';
import { CardetailService } from 'src/app/services/car-detail.service';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-cardetail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails: CarDetail[] = []
  images: Image[] = []
  dataLoaded = false;

  constructor(
    private carDetailService: CardetailService, 
    private imageService: ImageService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.GetCarDetailByCarId(params["carId"])
        this.GetImagesByCarId();
      }
    })
  }

  GetCarDetailByCarId(carId: number) {
    this.carDetailService.GetCarDetailByCarId(carId).subscribe(Car => {
      this.carDetails = Car.data;
    })
  }

  GetImagesByCarId() {
    this.imageService.GetImagesByCarId(this.activatedRoute.snapshot.params["carId"]).subscribe(Images => {
      this.images = Images.data;
      console.log(Images.data)
    })
  }

  getCurrentSliderImageClass(sliderImage: Image): string {
    if (this.images[0] === sliderImage) {
       return 'carousel-item active';
    }

    return 'carousel-item';
 }

 isAuthenticate(): boolean {
    return this.authService.isAuthenticated();
 }

}