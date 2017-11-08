import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../../items/enums/state.enum';
import { Item } from '../../../items/interfaces/item.model';
import { COLLECTION } from '../../../items/collection';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  state = State;
  collection = COLLECTION;
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  @Output() newItem: EventEmitter<Item> = new EventEmitter();

  constructor(private _Router: Router, private fb: FormBuilder) {
    this.nameCtrl = fb.control('',[
      Validators.required,
      Validators.minLength(5)
    ]);
    this.refCtrl = fb.control('',[
      Validators.required,
      Validators.minLength(4)
    ]);
    this.stateCtrl = fb.control(this.state.ALIVRER);

    this.form = fb.group({
      name: this.nameCtrl,
      reference: this.refCtrl,
      state: this.stateCtrl
    });
   }

  ngOnInit() {
    
  }

  process() {
    console.log(this.form.value);
    this.newItem.emit(this.form.value);
    //this.collection.push(this.form.value);
    this.reset();
    //this._Router.navigate( ['/list']);
  }

  reset() {
    this.form.reset();
    this.stateCtrl.setValue(this.state.ALIVRER);
  }

  isError(champ: string): any{
    return this.form.get(champ).touched && this.form.get(champ).hasError('minlength');
  }

}
