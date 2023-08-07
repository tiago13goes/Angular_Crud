import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  getNextId(data: any[]): number | void {
    let lenght: number = data.length
    return lenght == 0 ? 1 : data[lenght - 1] != null ? data[lenght - 1].id + 1 : alert("Error on getting next Id")
  }

  getIndex(data: any[], item: any): number {
    return data.indexOf(item)
  }

}
