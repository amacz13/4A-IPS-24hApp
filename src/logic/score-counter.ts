import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ScoreCounter {

  public totalPoints = 0;
  public goodAnswers = 0;
  public badAnswers = 0;

  constructor() {

  }

  win(winPoints: number) {
    this.totalPoints += winPoints;
    this.goodAnswers++;
  }

  lose() {
    this.badAnswers++;
  }

  reset() {
    this.totalPoints = 0;
    this.goodAnswers = 0;
    this.badAnswers = 0;
  }
}
