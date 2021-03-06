import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './componenets/car/car.component';
import { BrandComponent } from './componenets/brand/brand.component';
import { ColorComponent } from './componenets/color/color.component';
import { CustomerComponent } from './componenets/customer/customer.component';
import { RentalComponent } from './componenets/rental/rental.component';
import { NaviComponent } from './componenets/navi/navi.component';
import { CardetailComponent } from './componenets/car-detail/car-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe-car.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './componenets/cart-summary/cart-summary.component';
import { FilterPipeCustomerPipe } from './pipes/filter-pipe-customer.pipe';
import { FilterPipeRentalPipe } from './pipes/filter-pipe-rental.pipe';
import { FilterPipeBrandPipe } from './pipes/filter-pipe-brand.pipe';
import { FilterPipeColorPipe } from './pipes/filter-pipe-color.pipe';
import { CarAddComponent } from './componenets/car-add/car-add.component';
import { ColorAddComponent } from './componenets/color-add/color-add.component';
import { BrandAddComponent } from './componenets/brand-add/brand-add.component';
import { LoginComponent } from './componenets/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './componenets/register/register.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { HeroComponent } from './componenets/hero/hero.component';
import { BrandUpdateComponent } from './componenets/brand-update/brand-update.component';
import { ColorUpdateComponent } from './componenets/color-update/color-update.component';
import { CarUpdateComponent } from './componenets/car-update/car-update.component';
import { ProfileComponent } from './componenets/profile/profile.component';
import { AuthMenuComponent } from './componenets/auth-menu/auth-menu.component';
import { CardComponent } from './componenets/card/card.component';
import { CardSavedComponent } from './componenets/card-saved/card-saved.component';
import { CarFilterComponent } from './componenets/car-filter/car-filter.component';
import { CarRentComponent } from './componenets/car-rent/car-rent.component';
import { ExpirationInterceptor } from './interceptors/expiration.interceptor';

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
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeroComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    CarUpdateComponent,
    ProfileComponent,
    AuthMenuComponent,
    CardComponent,
    CardSavedComponent,
    CarFilterComponent,
    CarRentComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
  ],

  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ExpirationInterceptor, multi: true, },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
