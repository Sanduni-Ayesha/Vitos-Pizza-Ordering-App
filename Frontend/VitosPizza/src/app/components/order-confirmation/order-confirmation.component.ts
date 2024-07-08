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
  total:number = 0;

  ngOnInit(){
    this.orders = this.orderDataService.orderList
    this.getTotal();
  }

  getTotal() {
    for (const element of this.orders) {
      this.total += element.ordered_amount * element.price;
    }
  }

  confirmPayment() {

  }
}
