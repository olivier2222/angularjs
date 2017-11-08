import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ItemId } from '../../interfaces/item-id.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('item') item: ItemId;
  state = State;
  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
  }

  changeState (item: ItemId, newState: State): void {
    item.state = newState;
    this._CollectionService.update(item);
  };

  deleteItem( item:ItemId):void {
    this._CollectionService.delete(item);
  };

}
