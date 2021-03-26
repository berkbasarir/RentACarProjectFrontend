import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './componenets/car/car.component';
import { BrandComponent } from './componenets/brand/brand.component';
import { ColorComponent } from './componenets/color/color.component';
import { CustomerComponent } from './componenets/customer/customer.component';
import { RentalComponent } from './componenets/rental/rental.component';
import { NaviComponent } from './componenets/navi/navi.component';
import { CardetailComponent } from './componenets/cardetail/cardetail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from "ngx-toastr";
import { CartSummaryComponent } from './componenets/cart-summary/cart-summary.component';
import { FilterPipeCustomerPipe } from './pipes/filter-pipe-customer.pipe';
import { FilterPipeRentalPipe } from './pipes/filter-pipe-rental.pipe';
import { FilterPipeBrandPipe } from './pipes/filter-pipe-brand.pipe';
import { FilterPipeColorPipe } from './pipes/filter-pipe-color.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CardetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    FilterPipeCustomerPipe,
    FilterPipeRentalPipe,
    FilterPipeBrandPipe,
    FilterPipeColorPipe,    
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: "toast-bottom-right"}),
  ],

  providers: [],
  
  bootstrap: [AppComponent],
})

export class AppModule {}
