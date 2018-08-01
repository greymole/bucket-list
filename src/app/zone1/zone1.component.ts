import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone1',
  templateUrl: './zone1.component.html',
  styleUrls: ['./zone1.component.scss']
})
export class Zone1Component implements OnInit {
  itemCount: number;
  items = [];
  itemDesc: string = 'Add an Item';

  constructor() { }

  ngOnInit() {
    this.itemCount = this.items.length;
    }

  addItem(){
    this.items.push(this.itemDesc);
    this.itemDesc = '';
    this.itemCount = this.items.length;
  }

}
