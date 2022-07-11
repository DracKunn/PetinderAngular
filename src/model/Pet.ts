import {Kind} from "./Kind";

export interface Pet{
  name : string | any;
  kind : Kind;
  image : string;
  profileText : string;
  popularity: number;
}
