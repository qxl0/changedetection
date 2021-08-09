// @ts-nocheck
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// export class Item {
//   title: string
// }

@Component({
  selector: 'app-itemslist',
  template: `
  <div *ngFor="let item of items | async; index as i">{{i}} ===> {{item.title}}</div>
`,
changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemslistComponent implements OnInit {
  @Input() items: Observable<Item[]>;
  _items: Item[];
  constructor(private cdf: ChangeDetectorRef){}
  ngOnInit() {
    this.items.subscribe(res => {
      console.log("got items: ",res);
      this._items = res;
      // this.cdf.markForCheck();
    });
  }

}
