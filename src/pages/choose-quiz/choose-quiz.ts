import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuestionReadingPage} from '../question-reading/question-reading';
import {QuestionAnswerPage} from '../question-answer/question-answer';

/**
 * Generated class for the ChooseQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-quiz',
  templateUrl: 'choose-quiz.html',
})
export class ChooseQuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseQuizPage');
  }

  search($event: UIEvent) {
    
  }

  goToQuestion() {
    setTimeout(() => this.navCtrl.push(QuestionAnswerPage), 5000);
    this.navCtrl.push(QuestionReadingPage);
  }
}
