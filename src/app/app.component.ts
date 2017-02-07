import {Component, OnInit, ReflectiveInjector} from '@angular/core';

import { ExtendComboboxComponent } from './inputbox/extendcombobox.component'
import { GitHubService } from './services/github/github.service'
import { BitBucketService } from './services/bitbucket/bitbucket.service'

@Component({
  selector: 'education-app',
  template: `
    <h1>Hello {{name}} project</h1>
    <extendcombobox [multiselect]="true" [dataservicename]="'github'" (selectedItems)="countChangeFirst($event)"></extendcombobox>
    <p *ngIf="countFirst">There are {{ countFirst }} selected items</p>
    <p>There is another html element</p>
    <extendcombobox [multiselect]="false" [dataservicename]="'bitbucket'" (selectedItems)="countChangeSecond($event)"></extendcombobox>
    <p *ngIf="countSecond">There are {{ countSecond }} selected items</p>
  `,
})
export class AppComponent extends OnInit {
  name = 'Education Angular 2';
  countFirst : number;
  countSecond : number;
  ngOnInit(): void {

  }

  countChangeFirst(event : any) {
    this.countFirst = event.length;
  }


  countChangeSecond(event : any) {
    this.countSecond = event.length;
  }
}
