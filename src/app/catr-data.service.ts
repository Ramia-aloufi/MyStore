import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatrDataService {
  items: Product[] = [];
  total  =0


  addToCart(product: Product) {

    let exist = this.items.some(exist => exist.id === product.id)
    if(exist){
        this.items.map(aa=>aa.quantity +=1)
    } else{
      product.quantity = 1
        this.items.push(product)}
}
  getItems():Product[]{
    return this.items;
  }
  deleteItem(id:number):Product[]{
  let index = this.items.findIndex(item => item.id === id); 
  this.items.splice(index,1)
  return this.items
  }
  getotal():number{
    this.total  =0
    this.items.map(ii =>{
       this.total += ii.price * ii.quantity
    })
    return this.total
  }

  updateItem(product:Product):Product[]{
    let index = this.items.findIndex(item => item.id === product.id); 
    this.items[index].quantity = product.quantity
    return this.items
  }
}
