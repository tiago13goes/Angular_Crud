import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemApiService } from 'src/app/services/item-api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemApiService) { }

  items: Item[] = [];

  ngOnInit() {
    this.items = this.itemService.getAll()
  }

  deleteItem(id: number) {
    let success = this.itemService.delete(id)
    if (success)
      this.items = this.itemService.getAll()  
  }
}
