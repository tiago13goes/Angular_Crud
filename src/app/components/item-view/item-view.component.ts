import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemApiService } from 'src/app/services/item-api.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemApiService) { }

  item!: Item | null

  ngOnInit() {
    this.route.params.subscribe(params => {
      debugger
      let itemId = params["id"];
      this.item = this.itemService.getById(itemId)
    });
  }

}
