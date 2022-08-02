import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild';
  currentBeverage ="coffee"
  beverages=['milk','tea','coffee','juice']
  customername = [];
   parentdata:any='' ;
  data: any = [];
 addBeverage(newBeverage:string){
 this.beverages.push(newBeverage);
  }
  customer() {
    this.data = this.beverages
    // this.router.navigate(['/child'])
    console.log(this.data)
    return false
  }
  recivedata(data:string) {
    this.beverages.push(data);
    // this.customername.push(event)
    console.log(data);
      return false
  }
  // console.log(data);

}
