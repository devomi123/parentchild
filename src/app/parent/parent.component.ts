import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


    @Input() parentdata:any;
                     //beverage = "tea";
  // @Output() newBeverageEvent = new EventEmitter<string>()
  @Output() newdatasendEvent = new EventEmitter<string>()
    constructor() { }
    customername = [];
    // parentdata:any='' ;
   data: any = [];
   formdata:any
   name:any
    ngOnInit(): void {

    }

  //  addBeverageEvent(value:any){
  //   this.newBeverageEvent.emit(value)
  //   return false
  //  }
   sendparent(value:any){
  this.newdatasendEvent.emit(value)
  console.log(value);
  return false
   }
}
