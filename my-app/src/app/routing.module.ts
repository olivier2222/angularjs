import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListitemsComponent } from './items/containers/listitems/listitems.component';
import { AddComponent } from './items/containers/add/add.component';


const appRoutes: Routes = [

  { path: 'list', component: ListitemsComponent},
  { path: 'add', component: AddComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  
})

export class RoutingModule { }
