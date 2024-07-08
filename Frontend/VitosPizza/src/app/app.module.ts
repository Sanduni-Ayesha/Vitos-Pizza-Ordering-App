import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {OrderConfirmationComponent} from './components/order-confirmation/order-confirmation.component';
import {PizzaComponent} from './components/pizza/pizza.component';
import {RegisterUserComponent} from './components/register-user/register-user.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatLabel} from "@angular/material/form-field";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatTable} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OrderConfirmationComponent,
    PizzaComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatLabel,
    MatTabGroup,
    MatTab,
    MatTabLabel,
    MatButton,
    MatDivider,
    MatCardImage,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
