import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemApiService } from 'src/app/services/item-api.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent {
  newItem: Item = { id: 0, name: "", description: ""};

  constructor(private itemService: ItemApiService, private router: Router) { }

  saveItem() {
    let success: boolean = this.itemService.create(this.newItem)
    console.log(this.itemService.getAll())
    if(success) this.router.navigateByUrl('/item/list');
  }
}
