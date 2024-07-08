import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OrderDataService} from "../../services/order-data/order-data.service";

@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrl: './payment-portal.component.css'
})
export class PaymentPortalComponent implements OnInit{
  paymentForm = new FormGroup({
    paymentMethod: new FormControl(),
    cardNumber: new FormControl(),
  });

  constructor(private _snackBar: MatSnackBar, protected orderDataService: OrderDataService) {}

  total: number=0;

  ngOnInit(): void {
    this.total = this.orderDataService.totalCost;
  }

  confirmation() {
    this._snackBar.open("Payment successful! Order placed.", "Close",{
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}
