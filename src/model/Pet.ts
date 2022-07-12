import {Kind} from "./Kind";

export interface Pet{
  name : string;
  kind : Kind;
  image : string;
  profileText : string;
  popularity: number;
}
