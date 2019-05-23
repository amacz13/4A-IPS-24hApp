import {Question} from "./question";

export class Quiz {

  constructor(public id: number, public title: string, public type: string,  public questions: Array<Question>) {

  }
}
