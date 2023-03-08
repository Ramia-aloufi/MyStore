import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product
  @Output() add = new EventEmitter()

  constructor(private location:Location){}

ngOnInit(): void {
  this.product = this.location.getState() as Product;
}

addToCart() {
  this.add.emit(5)
}
}
