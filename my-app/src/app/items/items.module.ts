import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListitemsComponent } from './components/listitems/listitems.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListitemsComponent],
  exports: [
    ListitemsComponent
  ]
})
export class ItemsModule { }
