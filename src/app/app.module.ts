import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductItemComponent } from './product-item/product-item.component';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { CatrItemComponent } from './catr-item/catr-item.component';
import { CatrFormComponent } from './catr-form/catr-form.component';
import { CatrDataService } from './catr-data.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckoutFormComponent,
    OrderConfirmationComponent,
    ProductItemComponent,
    HeaderComponent,
    CatrItemComponent,
    CatrFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [CatrDataService],
  bootstrap: [AppComponent,ProductDetailsComponent,ProductItemComponent,ProductlistComponent,HeaderComponent]
})
export class AppModule {
  active = 'top';


 }
