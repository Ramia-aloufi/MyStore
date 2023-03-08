import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() add = new EventEmitter()

  item:Product[];

  constructor() {}
  ngOnInit(): void {}
  
  addToCart(product: Product) {
    this.add.emit(product)
  }
}
