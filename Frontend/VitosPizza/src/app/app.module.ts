import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatTab, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatTable} from "@angular/material/table";
import { PaymentPortalComponent } from './components/payment-portal/payment-portal.component';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OrderConfirmationComponent,
    PizzaComponent,
    RegisterUserComponent,
    PaymentPortalComponent
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
    MatCellDef,
    MatRadioGroup,
    MatRadioButton,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatToolbarRow,
    MatIcon,
    MatToolbar,
    MatInput,
    MatFormField,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
