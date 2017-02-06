/**
 * Created by User on 2/6/2017.
 */

import { Injectable, OnInit } from '@angular/core';
import {IExtendComboboxDataService} from "../inputbox/extendcombobox.service.interface";

@Injectable()
export class GitHubService implements OnInit, IExtendComboboxDataService{
  ngOnInit(): void {
    //TODO load user data
  }

  getRepoList(): void {
    //TODO request github api
  }

  LoadData(): Promise<Array<Object>> {
    return Promise.resolve({});
  };

  Search(text: string): Promise<Array<Object>> {
    return Promise.resolve({});
  };

}
