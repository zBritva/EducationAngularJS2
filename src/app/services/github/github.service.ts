/**
 * Created by User on 2/6/2017.
 */

import { Injectable } from '@angular/core';
import {IDataService, IBaseData} from "../../inputbox/extendcombobox.service.interface";
import { PROJECTS } from './github.service.mock'
import {GitHubProject} from "./github.project.model";

@Injectable()
export class GitHubService extends IDataService{
  ngOnInit(): void {
    //TODO load user data
  }

  _getRepoList(): void {
    //TODO request github api
  }

  LoadData(): Promise<Array<IBaseData>> {
    //return mock data
    return Promise.resolve(PROJECTS);
  };

  Search(text: string): Promise<Array<IBaseData>> {
    //return mock data
    return Promise.resolve(PROJECTS.filter(function (value) {
      return value.name.match(text) != null;
    }));
  };

  AddItem(item: IBaseData): void {
    PROJECTS.push(<GitHubProject>item);
  }
}
