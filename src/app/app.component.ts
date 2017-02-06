import { Component } from '@angular/core';

import { ExtendComboboxComponent } from './inputbox/extendcombobox.component'

@Component({
  selector: 'education-app',
  template: `
    <h1>Hello {{name}} project</h1>
    <extendcombobox></extendcombobox>
  `,
})
export class AppComponent  { name = 'Education Angular 2'; }
