import {Message} from "./message";

export interface Project {
  uuid:string;
  number:string;
  title:string;
  customer:string;
  categories:string[];
  messages:Message[];
}
