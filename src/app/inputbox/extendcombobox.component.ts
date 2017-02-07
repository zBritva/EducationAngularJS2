/**
 * Created by User on 2/6/2017.
 */

import {Component, OnInit, Input, Provider, ReflectiveInjector, Inject, Injector} from '@angular/core';

import {IDataService, IBaseData} from './extendcombobox.service.interface';
import {GitHubService} from "../services/github/github.service";
import {BitBucketService} from "../services/bitbucket/bitbucket.service";

@Component({
  moduleId: module.id,
  selector: 'extendcombobox',
  templateUrl: './extendcombobox.component.html',
  styleUrls: [ './extendcombobox.component.css' ],
  //No inject service here, because this component will be work with different services depends on where he will use
  //providers: [{ provide: IDataService, useClass: GitHubService }]
  providers: [
    { provide: 'bitbucket', useClass: BitBucketService },
    { provide: 'github', useClass: GitHubService }
  ]
})
export class ExtendComboboxComponent implements OnInit {
  data: Array<IBaseData>;
  @Input()
  currentValue: string;
  @Input()
  multiselect: boolean;
  @Input()
  dataservicename: string;
  isComboboxOpen: boolean;

  dataService: IDataService;

  constructor(private injector:Injector) {
  }

  ngOnInit(): void {
    this.dataService = <IDataService>this.injector.get(this.dataservicename);
    this.dataService.LoadData().then(data => this.data = <Array<IBaseData>>data);
  }

  _search(text: string): void {
    let me = this;
    this.dataService.Search(text).then(function(data){
      if(data && data.length > 0) {
        me.data = <Array<IBaseData>> data;
        me.isComboboxOpen = true;
      }
      else{
        me.isComboboxOpen = false;
      }
    });
  }

  onOpenCombobox(): void {
    this.isComboboxOpen = !this.isComboboxOpen;
  }

  onSelectValue(cbVal : IBaseData): void {
    console.log('Selected ' + cbVal.name);
    this.currentValue = cbVal.name;
    if(this.multiselect){
      this.data.find(data => data.name == cbVal.name).selected = true;

      return; //don't close value list in multiselect mode
    }

    //close comboboxvalue list
    this.isComboboxOpen = false;
  }

  onBlurValueList(): void {
    this.isComboboxOpen = false;
  }

  onKeyPress(event: any){
    console.log('onKeyPress:' + this.currentValue);
    let value: string = event.target.value;

    if(!value || !(value.length > 3)) {
      this.isComboboxOpen = false;
      this.ngOnInit();
      return;
    }

    this._search(value);
    console.log('search: ' + value);
  }

  onAddItem(): void {
    this.dataService.AddItem(<IBaseData>{
      name: this.currentValue,
      selected: false,
      url: 'none'
    });
  }
}
