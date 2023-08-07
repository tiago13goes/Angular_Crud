import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemApiService } from 'src/app/services/item-api.service';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {

  item!: Item;

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      debugger
      let itemId = params["id"];
      let data: Item | null = this.itemService.getById(itemId)
      if (data)
        this.item = data
      else {
        alert("Failed on getting item")
        window.location.href = '/item/list'
      }
    });
  }

  updateItem() {
    if (this.item != null) {
      let success: boolean = this.itemService.update(this.item)
      if (success) this.router.navigateByUrl('/item/list');
    }
  }

}
