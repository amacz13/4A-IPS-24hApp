import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScoreCounter} from "../../logic/score-counter";
import {Question} from "../../logic/question";

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
  private dummyIndex: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public score: ScoreCounter) {
    this.question = navParams.get("question");
    this.rand = Math.floor(Math.random()*4);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionAnswerPage');
  }

}
