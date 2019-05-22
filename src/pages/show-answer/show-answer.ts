import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Question} from '../../logic/question';
import {ResultsPage} from '../results/results';
import {QuestionReadingPage} from '../question-reading/question-reading';
import {GameFlow} from '../../logic/game-flow';
import {QuestionAnswerPage} from '../question-answer/question-answer';
import {ScoreCounter} from "../../logic/score-counter";

@IonicPage()
@Component({
  selector: 'page-show-answer',
  templateUrl: 'show-answer.html',
})
export class ShowAnswerPage {
  private question: Question;
  private time: number = 5;
  private sec: string = "secondes";

  constructor(public navCtrl: NavController, public navParams: NavParams, public game: GameFlow, public score: ScoreCounter) {
    this.question = navParams.get("question");

    this.nextQuestion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowAnswerPage');
  }

  nextQuestion() {
    const question: any = this.game.next();
    this.timer();
    setTimeout(() => {
      if(question == 0)
      {
        this.navCtrl.push(ResultsPage);
      }
      else {
        setTimeout(() => this.navCtrl.push(QuestionAnswerPage, {
          question: question
        }), 3000);
        this.navCtrl.push(QuestionReadingPage, {
          question: question
        });
      }
    }, 5000);
  }

  timer() {
    setTimeout(() => {
      this.time -= 1;
      if (this.time <= 1) this.sec = "seconde";
      if (this.time > 0) this.timer();
    },1000);
  }
}
