import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


interface Pizza {
  id: string;
  name: string;
  price: number;
}


const   getPizzas$: Observable<Pizza[]> = of([
    { id: "j7P9sz", name: "Pepperoni", price: 899 },
    { id: "tMot05", name: "Supreme", price: 999 },
    { id: "x8sD3g", name: "Sizzler", price: 899 },
  ]);
  
@Component({
  selector: 'app-pizzalist',
  template: `
   <ul>
      <li *ngFor="let pizza of pizzas$ | async; index as i">
        {{ i }}: {{ pizza.name }}
      </li>
    </ul>  
  `,
  styles: [
  ]
})
export class PizzalistComponent implements OnInit {

  pizzas$: Observable<Pizza[]>;


  constructor() {}

  ngOnInit() {
    this.pizzas$ = getPizzas$;
  }

}
