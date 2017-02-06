/**
 * Created by User on 2/6/2017.
 */

import { Component, OnInit } from '@angular/core';

import {IExtendComboboxDataService} from './extendcombobox.service.interface';
import {GitHubService} from "../services/github.service";

@Component({
  moduleId: module.id,
  selector: 'extendcombobox',
  templateUrl: './extendcombobox.component.html',
  styleUrls: [ './extendcombobox.component.css' ],
})
export class ExtendComboboxComponent implements OnInit {
  data: Object;
  dataService: IExtendComboboxDataService;
  constructor() {
    //TODO move outside of constructior
    this.dataService = new GitHubService();
  }

  ngOnInit(): void {
    this.dataService.LoadData().then(data => this.data = data);
  }

  onSearch(text: string): void {
    this.dataService.Search(text).then(data => this.data = data);
  }
}
