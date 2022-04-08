import { Injectable } from '@angular/core';
import { BucketService } from "../../services/bucket.service";
import { IFruit } from "../../interfaces/fruit.interface";

@Injectable({
  providedIn: 'root'
})
export class EmployeeBucketService extends BucketService {

  constructor() {
    super();
  }

  removeItem(fruit: IFruit) {
    alert('Employees cannot delete items');
  }
}
