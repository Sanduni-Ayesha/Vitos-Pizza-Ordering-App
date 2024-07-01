import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PizzaComponent} from "./components/pizza/pizza.component";

const routes: Routes = [
  {path: '', redirectTo: 'pizza', pathMatch: 'full'},
  {path: 'pizza', component: PizzaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
