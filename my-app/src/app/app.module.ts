import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ItemsModule } from './items/items.module';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { CollectionService } from './core/services/collection/collection.service';
import { environment } from '../environments/environment';



@NgModule({
  imports: [
    BrowserModule,
    
    RoutingModule,
    CoreModule,
    SharedModule,
    
    ItemsModule,
    RouterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
