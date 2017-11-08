import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { StateDirective } from './directives/state/state.directive';
import { FormsModule }    from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    MenuComponent,
    StateDirective,
    FormComponent,
    ModalComponent],
  exports: [
    MenuComponent,
    StateDirective,
    FormComponent
  ],
  entryComponents:[
    ModalComponent
  ]
})
export class SharedModule { }
