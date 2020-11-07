import {Message} from "./message";
import {Category} from "./category";

export interface Project {
  uuid:string;
  number:string;
  title:string;
  customer:string;
  categories:Category[];
  messages:Message[];
}
