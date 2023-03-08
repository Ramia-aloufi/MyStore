import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-catr-item',
  templateUrl: './catr-item.component.html',
  styleUrls: ['./catr-item.component.css']
})
export class CatrItemComponent implements OnInit {
ngOnInit(): void {
 this.upd = this.product.quantity
}
@Input() product:Product 
@Output() del  = new EventEmitter()
@Output() quantity  = new EventEmitter()
upd:number = 0




deletItem(product:Product){
  this.del.emit(product)
}

updQuantity(product:Product){
  product.quantity = this.upd
  this.quantity.emit(product)
  // alert(this.upd)
}

}
