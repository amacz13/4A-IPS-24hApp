import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScoreCounter} from "../../logic/score-counter";
import {Question} from "../../logic/question";
import {ResultsPage} from '../results/results';
import {QuestionReadingPage} from "../question-reading/question-reading";
import {GameFlow} from "../../logic/game-flow";

/**
 * Generated class for the QuestionAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-answer',
  templateUrl: 'question-answer.html',
})
export class QuestionAnswerPage {
  private question: Question;
  private rand: number;
  private answers: Array<string>;
  private answered: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public game: GameFlow, public score: ScoreCounter) {
    this.question = navParams.get("question");
    this.rand = Math.floor(Math.random()*4);

    this.answers = new Array<string>();

    for(let i = 0; i < 3; i++)
    {
      this.answers.push(this.question.dummyReps[i]);
    }

    this.answers.push(this.question.good);

    this.answers = this.shuffle(this.answers);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionAnswerPage');
  }

  goToResults() {
    //this.navCtrl.push(ResultsPage )
  }

  getAnswers() {

  }

  shuffle(array: any) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  checkAnswer(answer: string, evt: MouseEvent) {
    if(!this.answered)
    {
      this.answered = true;
      if(answer === this.question.good)
      {
        evt.srcElement.className = evt.srcElement.className + " goodAnswer";
      }
      else {
        evt.srcElement.className = evt.srcElement.className + " badAnswer";
      }

      const question: any = this.game.next();

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
      }, 2000);
    }
  }
}
