import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
      <h1>Hello {{name}} !</h1>
     {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  constructor() { }
  
  get runChangeDetection(): boolean {
    console.log('Checking the view');
    return true;
  }
  ngOnInit(): void {
  }

}
