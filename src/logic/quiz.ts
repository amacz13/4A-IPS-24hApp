import {Question} from "./question";

export class Quiz {

  constructor(public title: string, public type: string,  public questions: Array<Question>) {

  }
}
