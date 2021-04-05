import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './componenets/brand-add/brand-add.component';
import { CarAddComponent } from './componenets/car-add/car-add.component';
import { CarComponent } from './componenets/car/car.component';
import { CardetailComponent } from './componenets/car-detail/car-detail.component';
import { ColorAddComponent } from './componenets/color-add/color-add.component';
import { CustomerComponent } from './componenets/customer/customer.component';
import { LoginComponent } from './componenets/login/login.component';
import { RegisterComponent } from './componenets/register/register.component';
import { RentalComponent } from './componenets/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent, canActivate:[LoginGuard] },
  { path: "cars", component: CarComponent, canActivate:[LoginGuard] },  
  { path: "cars/brand/:brandId", component: CarComponent, canActivate:[LoginGuard] },
  { path: "cars/color/:colorId", component: CarComponent, canActivate:[LoginGuard] },
  { path: "cars/detail/:carId", component: CardetailComponent, canActivate:[LoginGuard] },
  { path: "customers", component: CustomerComponent, canActivate:[LoginGuard] },
  { path: "rentals", component: RentalComponent, canActivate:[LoginGuard] },
  { path: "cars/add", component: CarAddComponent, canActivate:[LoginGuard] },
  { path: "colors/add", component: ColorAddComponent, canActivate:[LoginGuard] },
  { path: "brands/add", component: BrandAddComponent, canActivate:[LoginGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
