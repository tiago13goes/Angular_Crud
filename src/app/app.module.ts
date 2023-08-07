import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemUpdateComponent } from './components/item-update/item-update.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemCreateComponent,
    ItemUpdateComponent,
    ItemViewComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
