import { Pipe, PipeTransform } from '@angular/core';
import {Project} from "../model/project";

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: Project[], text: string): Project[] {
    if (text == null || text === ""){
      return projects;
    }
    return projects.filter(p => p.number.toLowerCase().includes(text.toLowerCase())
      || p.title.toLowerCase().includes(text.toLowerCase())
      || p.customer.toLowerCase().includes(text.toLowerCase()))
  }
}
