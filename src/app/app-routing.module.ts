import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: ProductlistComponent },
  { path: 'detail', component: ProductDetailsComponent },
  { path: 'item', component: ProductItemComponent  },
  { path: 'cart', component: ShoppingCartComponent  },
  { path: 'confirm', component: OrderConfirmationComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
