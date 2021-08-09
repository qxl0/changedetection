import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      {{counter}}
      <button (click)="increment()">Increment</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  counter: number;
  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
    setTimeout(() => {
      this.counter = 5;
      this.cdr.detectChanges();
    }, 0);
    setTimeout(() => this.counter = 5, 100);
   }
  increment(): void {
    this.counter++;
  }
  ngOnInit(): void {
  }

}
