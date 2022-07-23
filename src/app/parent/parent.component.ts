import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() beverage = "tea";
  @Output() newBeverageEvent = new EventEmitter<string>()
    constructor() { }
    ngOnInit(): void {
    }

   addBeverageEvent(value:any){
    this.newBeverageEvent.emit(value)
   }
}
