import {Injectable, OnInit} from "@angular/core";
/**
 * Created by User on 2/6/2017.
 */

export interface IBaseData {
  name: string;
  selected?: boolean;
  [propName: string]: any;
}

//It is a abstract data-service for component without realization
//This class only for defining interface for other services, which will be provide data for component
@Injectable()
export class IDataService extends OnInit {
  ngOnInit(): void { };
  LoadData(): Promise<Array<IBaseData>> { return null };
  Search(text: string): Promise<Array<IBaseData>> { return null };
  AddItem(item: IBaseData): void { return null };
}

