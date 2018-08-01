import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  itemCountR: number;
  itemsR = [];
  itemDescR: string = 'Add an Item';

  itemCountL: number;
  itemsL = [];
  itemDescL: string = 'Add an Item';

  constructor() { }

  ngOnInit() {
    this.itemCountL = this.itemsL.length;
    this.itemCountR = this.itemsR.length;
  }

  addItemL(){
    this.itemsL.push(this.itemDescL);
    this.itemDescL = '';
    this.itemCountL = this.itemsL.length;
  }
  addItemR(){
    this.itemsR.push(this.itemDescR);
    this.itemDescR = '';
    this.itemCountR = this.itemsR.length;
  }

}
