import {Component, OnInit, ReflectiveInjector} from '@angular/core';

import { ExtendComboboxComponent } from './inputbox/extendcombobox.component'
import { GitHubService } from './services/github/github.service'
import { BitBucketService } from './services/bitbucket/bitbucket.service'

@Component({
  selector: 'education-app',
  template: `
    <h1>Hello {{name}} project</h1>
    <extendcombobox [multiselect]="false" [dataservicename]="'github'"></extendcombobox>
    <p>There is another html element</p>
    <extendcombobox [multiselect]="false" [dataservicename]="'bitbucket'"></extendcombobox>
  `,
})
export class AppComponent extends OnInit {
  name = 'Education Angular 2';

  ngOnInit(): void {

  }
}
