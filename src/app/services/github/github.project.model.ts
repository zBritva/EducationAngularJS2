/**
 * Created by User on 2/7/2017.
 */

import {IBaseData} from "../../inputbox/extendcombobox.service.interface";

export class GitHubProject implements IBaseData{
  name: string;
  selected?: boolean;
  url: string;
}
