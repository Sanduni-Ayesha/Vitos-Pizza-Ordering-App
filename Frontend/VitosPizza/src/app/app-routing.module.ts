import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PizzaComponent} from "./components/pizza/pizza.component";
import {RegisterUserComponent} from "./components/register-user/register-user.component";
import {OrderConfirmationComponent} from "./components/order-confirmation/order-confirmation.component";

const routes: Routes = [
  {path: '', redirectTo: 'pizza', pathMatch: 'full'},
  {path: 'pizza', component: PizzaComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'cart', component: OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
