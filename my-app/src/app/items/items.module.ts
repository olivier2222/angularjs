import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListitemsComponent } from './containers/listitems/listitems.component';
import { ItemComponent } from './components/item/item.component';
import { AddComponent } from './containers/add/add.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ListitemsComponent,
    ItemComponent,
    AddComponent
  ],
  exports: [
    ListitemsComponent
  ]
})
export class ItemsModule { }
