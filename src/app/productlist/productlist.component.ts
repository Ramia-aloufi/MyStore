import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../model/product';
import { CatrDataService } from '../catr-data.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  products:Product[]
  // cartData = new CatrDataService();

  constructor(private httpService:HttpService,private cartData:CatrDataService){}

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data  =>{
      this.products = data as Product[]

    })
  }
  showDetails(product:Product){
    console.log(product)
  }
  addToCart(e:Product){
      alert(e.title)
        this.cartData.addToCart(e)
  }
}
