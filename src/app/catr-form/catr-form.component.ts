import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-catr-form',
  templateUrl: './catr-form.component.html',
  styleUrls: ['./catr-form.component.css']
})
export class CatrFormComponent {
name:string;
address:string;
card:number;

onSubmit(){
  
  alert(this.name+' '+this.address+' '+this.card)
}
}
