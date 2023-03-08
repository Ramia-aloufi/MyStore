import { Component } from '@angular/core';
import { CatrDataService } from '../catr-data.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  total:number =   this.cartData.getotal();

  constructor(private cartData:CatrDataService) { }  

}
