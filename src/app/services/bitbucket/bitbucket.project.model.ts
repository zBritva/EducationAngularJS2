/**
 * Created by User on 2/7/2017.
 */

import { IBaseData } from "./../../inputbox/extendcombobox.service.interface";

export class BitBucketProject implements IBaseData{
  name: string;
  selected?: boolean;
  url: string;
}
