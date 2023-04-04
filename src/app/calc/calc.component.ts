import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  num1 : number = 20;
  num2 : number = 10;
  result : number = 0;

  calc(){
    this.result = this.num1 + this.num2;
    
  }

}
