import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';


/*
<hello [name]="title"></hello>
  <button (click)="onClick()">Trigger change detection</button>
  <br><br>
  <app-counter></app-counter>
     <button id="add" (click)="add()">Add</button>
     <app-itemslist [items]="items$"></app-itemslist>
*/


@Component({
  selector: 'app-root',
  template: `
  <app-patientlist></app-patientlist>
  `
})
export class AppComponent implements OnInit {
  items = [];
  items$ = new BehaviorSubject(this.items);
  
  add() {
    this.items.push({ title: Math.random() });
    this.items$.next(this.items);
  }
  ngOnInit() {}
}
