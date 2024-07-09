import {Component} from '@angular/core';
import {Pizza} from "../../model/pizza";
import {OrderDataService} from "../../services/order-data/order-data.service";

const categories: string[] = ["veg", "non-veg"];
const pizza = [
  new Pizza(1,
    "Pizza 1",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    1200,
    5,
    0),

  new Pizza(2,
    "Pizza 2",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    1850,
    5,
    0),

  new Pizza(3,
    "Pizza 3",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    900,
    5,
    0),

  new Pizza(4,
    "Pizza 4",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "non-veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    1900,
    5,
    0),

  new Pizza(5,
    "Pizza 5",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "non-veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    700,
    5,
    0),

  new Pizza(6,
    "Pizza 6",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    1200,
    5,
    0),

  new Pizza(7,
    "Pizza 7",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "non-veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    780,
    5,
    0),
]

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})

export class PizzaComponent {
  protected readonly categories = categories;
  cartItems: Pizza[] = [];
  pizzaList = pizza;

  constructor(private orderDataService: OrderDataService) {
    this.cartItems = this.orderDataService.orderList && this.orderDataService.orderList.length > 0
      ? this.orderDataService.orderList
      : [];
  }

  increment(item: Pizza) {
    item.ordered_amount = item.ordered_amount + 1
  }

  decrement(item: Pizza) {
    item.ordered_amount = item.ordered_amount - 1
  }

  addToCart(cartItem: Pizza) {
    this.cartItems.push(cartItem);
    // have validations for availability and warn msges
  }

  viewCart() {
    this.orderDataService.orderList = this.cartItems;
    console.log("View Cart items",this.cartItems);
    return this.cartItems;
  }
}
