import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';

public  number :number=0;
public increment (){
  this.number++;
}
public decremet (){
  this.number--;
}
}
