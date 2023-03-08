import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';
import { CatrDataService } from '../catr-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product
  @Output() add = new EventEmitter()

  constructor(private location:Location,private cartData:CatrDataService){}

ngOnInit(): void {
  this.product = this.location.getState() as Product;
}

addToCart(product: Product) {
  alert(product.title)
  this.cartData.addToCart(product)
}
}
