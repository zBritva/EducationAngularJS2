import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { ExtendComboboxComponent} from "./inputbox/extendcombobox.component";
import { HighlightDirective } from './directives/highlight.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ExtendComboboxComponent, HighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
