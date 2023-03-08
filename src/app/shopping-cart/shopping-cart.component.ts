import { Component} from '@angular/core';
import {  Product } from '../model/product';
import { CatrDataService } from '../catr-data.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  items:Product[] = this.cartData.getItems();
   total:number =   this.cartData.getotal();

constructor(private cartData:CatrDataService) { }  
del(e:Product){
  this.items =   this.cartData.deleteItem(e.id)
  this.total =   this.cartData.getotal();

alert("deleted")
}
upd(e:Product){
  this.items =  this.cartData.updateItem(e)
  this.total =   this.cartData.getotal();

}
}
