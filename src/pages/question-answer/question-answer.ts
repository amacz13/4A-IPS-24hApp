import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScoreCounter} from "../../app/score-counter";
import {ResultsPage} from '../results/results';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public score: ScoreCounter) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionAnswerPage');
  }

  goToResults() {
    this.navCtrl.push(ResultsPage )
  }
}
