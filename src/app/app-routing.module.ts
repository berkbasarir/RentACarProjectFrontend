import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './componenets/brand-add/brand-add.component';
import { CarAddComponent } from './componenets/car-add/car-add.component';
import { CarComponent } from './componenets/car/car.component';
import { CardetailComponent } from './componenets/cardetail/cardetail.component';
import { ColorAddComponent } from './componenets/color-add/color-add.component';
import { CustomerComponent } from './componenets/customer/customer.component';
import { LoginComponent } from './componenets/login/login.component';
import { RentalComponent } from './componenets/rental/rental.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent },
  { path: "cars", component: CarComponent },  
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "cars/detail/:carId", component: CardetailComponent },
  { path: "customers", component: CustomerComponent },
  { path: "rentals", component: RentalComponent },
  { path: "cars/add", component: CarAddComponent },
  { path: "colors/add", component: ColorAddComponent },
  { path: "brands/add", component: BrandAddComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
