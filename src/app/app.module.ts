import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './componenets/car/car.component';
import { BrandComponent } from './componenets/brand/brand.component';
import { ColorComponent } from './componenets/color/color.component';
import { CustomerComponent } from './componenets/customer/customer.component';
import { RentalComponent } from './componenets/rental/rental.component';
import { NaviComponent } from './componenets/navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule
  ],

  providers: [],
  
  bootstrap: [AppComponent],
})

export class AppModule {}
