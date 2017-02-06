import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import {ExtendComboboxComponent} from "./inputbox/extendcombobox.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ExtendComboboxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
