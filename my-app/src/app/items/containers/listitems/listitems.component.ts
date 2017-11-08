import { Component, OnInit } from '@angular/core';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Observable } from 'rxjs/Observable';
import { ItemId } from '../../interfaces/item-id.model';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.scss']
})
export class ListitemsComponent implements OnInit {
  collection: Observable<ItemId[]> ;
  state = State;
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

}
