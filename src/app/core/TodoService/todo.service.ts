import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getNumberOf(list: Todo[], critiria: string, value: any): number {
    let nbelements: number = 0
    switch (critiria) {
      case "userId": for (let i = 0; i < list.length; i++) {
        if (list[i].userId.valueOf() == value) {
          nbelements++;
        }

      } break;
      case "id": for (let i = 0; i < list.length; i++) {
        if (list[i].id.valueOf() == value) {
          nbelements++;
        }

      } break;
      case "title": for (let i = 0; i < list.length; i++) {
        if (list[i].title.valueOf() == value) {
          nbelements++;
        }
      } break;
      case "completed": for (let i = 0; i < list.length; i++) {
        if (list[i].completed.valueOf() == value) {
          nbelements++;
        }
      } break;
      default: nbelements = 0;
    }
    return nbelements;
  }
}
