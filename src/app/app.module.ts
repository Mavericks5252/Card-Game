import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControllerComponent } from './controller/controller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { ResetPopupComponent } from './reset-popup/reset-popup.component'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControllerComponent,
    ResetPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule,
    MatToolbarModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
