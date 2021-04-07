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
import { BrandUpdateComponent } from './componenets/brand-update/brand-update.component';
import { BrandComponent } from './componenets/brand/brand.component';
import { ColorComponent } from './componenets/color/color.component';
import { ColorUpdateComponent } from './componenets/color-update/color-update.component';
import { CarUpdateComponent } from './componenets/car-update/car-update.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent, canActivate:[LoginGuard] },

  { path: "cars", component: CarComponent, canActivate:[LoginGuard] },  
  { path: "cars/add", component: CarAddComponent, canActivate:[LoginGuard] },
  { path: "cars/update/:carId", component: CarUpdateComponent, canActivate:[LoginGuard] },
  { path: "cars/brand/:brandId", component: CarComponent, canActivate:[LoginGuard] },
  { path: "cars/color/:colorId", component: CarComponent, canActivate:[LoginGuard] },
  { path: "cars/detail/:carId", component: CardetailComponent, canActivate:[LoginGuard] },

  { path: "customers", component: CustomerComponent, canActivate:[LoginGuard] },
  { path: "rentals", component: RentalComponent, canActivate:[LoginGuard] },

  { path: "colors", component: ColorComponent, canActivate:[LoginGuard] },
  { path: "colors/add", component: ColorAddComponent, canActivate:[LoginGuard] },
  { path: "colors/update/:colorId", component: ColorUpdateComponent, canActivate:[LoginGuard] },

  { path: "brands", component: BrandComponent, canActivate:[LoginGuard] },
  { path: "brands/add", component: BrandAddComponent, canActivate:[LoginGuard] },
  { path: "brands/update/:brandId", component: BrandUpdateComponent, canActivate:[LoginGuard] },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
