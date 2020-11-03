import {Project} from "./project";

export interface Category {
  uuid: string;
  title: string;
  projects: Project[];
}
