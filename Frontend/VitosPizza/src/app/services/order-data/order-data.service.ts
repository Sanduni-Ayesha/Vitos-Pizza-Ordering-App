import { Injectable } from '@angular/core';
import {Pizza} from "../../model/pizza";

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  public orderList:Pizza[]=[];
  constructor() { }
}
