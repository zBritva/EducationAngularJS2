/**
 * Created by User on 2/6/2017.
 */

export interface IExtendComboboxDataService {
  LoadData(): Promise<Array<Object>>;
  Search(text: string): Promise<Array<Object>>;
}
