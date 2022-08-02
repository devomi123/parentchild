import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// @Input() beverage = "tea";
// @Output() newBeverageEvent = new EventEmitter<string>()
  constructor() { }
  ngOnInit(): void {
  }

//  addBeverageEvent(value:any){
//   this.newBeverageEvent.emit(value)
//  }
}
