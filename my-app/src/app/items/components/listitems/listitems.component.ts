import { Component, OnInit } from '@angular/core';
import { COLLECTION } from '../../collection';
import { Item } from '../../interfaces/item.model';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.scss']
})
export class ListitemsComponent implements OnInit {
  collection: Item[] = COLLECTION;
  constructor() { }

  ngOnInit() {
  }

}
