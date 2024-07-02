import {Component} from '@angular/core';
import {Pizza} from "../../model/pizza";

const categories: string[] = ["Veg", "Non-veg"];
const pizza = [
  new Pizza(1,
    "Pizza",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    1200,
    5,
    0),

  new Pizza(2,
    "Pizza",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    1850,
    5,
    0),

  new Pizza(3,
    "Pizza",
    "A delicious pizza with a thin crust with selected best quality toppings. Hand made with love and flavour.",
    "veg",
    "https://th.bing.com/th/id/OIP.8UeIFPMYwIErE1ShRYB9QAHaEo?rs=1&pid=ImgDetMain",
    900,
    5,
    0),
]

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})

export class PizzaComponent {
  amount: number = 1;
  protected readonly categories = categories;
  cartItems: Pizza[] = [];
  pizzaList = pizza;

  increment(item: Pizza) {
    item.ordered_amount = item.ordered_amount + 1
    console.log(this.amount)
  }

  decrement(item: Pizza) {
    item.ordered_amount = item.ordered_amount + 1
    console.log(this.amount)
  }

  addToCart(cartItem: Pizza) {
    this.cartItems.push(cartItem);
    // have validations for availability and warn msges
  }

  viewCart() {
    console.log(this.cartItems);
    return this.cartItems;
  }
}
