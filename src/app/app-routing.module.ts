import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { ItemUpdateComponent } from './components/item-update/item-update.component';

const routes: Routes = [
  {
    path: '', redirectTo: "/item", pathMatch: "full"
  },
  {
    path: "item",
    children: [
      {
        path: 'list',
        component: ItemListComponent
      },
      {
        path: 'create',
        component: ItemCreateComponent
      },
      {
        path: 'view/:id',
        component: ItemViewComponent
      },
      {
        path: 'update/:id',
        component: ItemUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
