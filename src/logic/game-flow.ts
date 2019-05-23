import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Question} from "./question";
import {HttpClient} from "@angular/common/http";
import {Quiz} from "./quiz";

@Injectable()
export class GameFlow {

  quizInfo: Quiz;

  questionsDone: Array<number>;

  constructor(public http: HttpClient) {
    /* get json quizz */
    this.http.get('../assets/quiz/ComputerScienceHistory.json').map(res => res as Quiz).subscribe(data => {
      this.quizInfo = data;
    });
  }

  start() {
    this.questionsDone = new Array<number>();

    var randomIndex = Math.floor(Math.random() * this.quizInfo.questions.length);

    this.questionsDone.push(randomIndex);

    return this.quizInfo.questions[randomIndex];
  }

  next() {
    var randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * this.quizInfo.questions.length);
    } while (this.questionsDone.indexOf(randomIndex) != -1);

    this.questionsDone.push(randomIndex);

    if (this.questionsDone.length >= 11) {
      return 0;
    } else {
      return this.quizInfo.questions[randomIndex];
    }
  }
}
