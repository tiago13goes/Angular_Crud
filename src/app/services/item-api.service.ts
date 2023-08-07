import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { IGenericApi } from '../interfaces/igeneric-api';
import { ArrayService } from '../helpers/array.service';

@Injectable({
  providedIn: 'root'
})

export class ItemApiService extends ArrayService implements IGenericApi<Item>  {

  data: Item[] = [
    {
      id: 1,
      name: "Item 1",
      description: "description Test"
    },
    {
      id: 2,
      name: "Item 2",
      description: "description Test 2"
    },
    {
      id: 3,
      name: "Item 3",
      description: "description Test 3"
    },
    {
      id: 4,
      name: "Item 4",
      description: "description Test 4"
    },
  ]

  constructor() {
    super();
  }

  getAll(): Item[] {
    return this.data;
  }

  getById(id: number): Item | null {
    let item: Item | undefined = this.data.find(i => i.id == id)
    
    if (item) return item

    alert("Item not found!")
    
    return null
  }

  create(item: Item): boolean {
    item.id = this.getNextId(this.data) ?? 0;

    if (item.id == 0) return false

    this.data.push(item);
    alert("Created!")

    return true;
  }

  update(item: Item): boolean {
    let itemOnDatabase: Item | null = this.getById(item.id)
    if (itemOnDatabase) {
      let index: number = this.getIndex(this.data, item)
      this.data[index] = item
      alert("Updated!")

      return true;
    }

    alert("Item not found!")

    return false
  }

  delete(id: number): boolean {
    let item: Item | null = this.getById(id)

    if (item) {
      this.data.splice(this.getIndex(this.data, item), 1)
      alert("Deleted!")
      return true
    }

    alert("Failed on deleting the item")
    return false
  }

}
