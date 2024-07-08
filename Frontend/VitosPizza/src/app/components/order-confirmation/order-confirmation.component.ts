import {Component, OnInit} from '@angular/core';
import {OrderDataService} from "../../services/order-data/order-data.service";
import {Pizza} from "../../model/pizza";

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent implements OnInit{
  constructor(protected orderDataService: OrderDataService) {
  }

  orders:Pizza[] =[];

  ngOnInit(){
    this.orders = this.orderDataService.orderList
    console.log(this.orders)
  }


}
