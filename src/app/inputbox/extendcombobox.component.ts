/**
 * Created by User on 2/6/2017.
 */

import {
  Component, OnInit, Input, Injector, Output,
  EventEmitter
} from '@angular/core';

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
  isComboboxOpen: boolean;
  dataService: IDataService;
  data: Array<IBaseData>;

  @Input()
  currentValue: string;
  @Input()
  multiselect: boolean;
  @Input()
  dataservicename: string;

  @Output()
  selectedItems = new EventEmitter<Array<IBaseData>>();

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

  _updateSelectedItems(): void {
    this.selectedItems.emit(this.data.filter(function (value) {
      return value.selected;
    }));
  }

  onOpenCombobox(): void {
    this.isComboboxOpen = !this.isComboboxOpen;
  }

  onSelectValue(cbVal : IBaseData): void {
    //TODO refactoring
    console.log('Selected ' + cbVal.name);

    let item = this.data.find(data => data.name == cbVal.name);

    if(this.multiselect){
      if(!this.currentValue)
        this.currentValue = "";

      if(item.selected)
        this.currentValue = this.currentValue.replace(item.name + ",", "");
      else
        this.currentValue += cbVal.name + ", ";

      //echange selection state of item
      item.selected = !item.selected;

      this.currentValue = this.currentValue.trim();

      this._updateSelectedItems();
      return; //don't close value list in multiselect mode
    }

    //echange selection state of item
    let curState =item.selected;
    //reset selections
    this.data.forEach(function (val) {
      val.selected = false;
    });
    //set opposite state to current item
    item.selected = !curState;

    this.currentValue = cbVal.name;

    this._updateSelectedItems();

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
