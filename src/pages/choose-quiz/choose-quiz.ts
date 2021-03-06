import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuestionReadingPage} from '../question-reading/question-reading';
import {QuestionAnswerPage} from '../question-answer/question-answer';
import {Question} from "../../logic/question";
import {GameFlow} from "../../logic/game-flow";
import {AvatarProgressPage} from '../avatar-progress/avatar-progress';
import {ScoreCounter} from "../../logic/score-counter";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public game: GameFlow, public score: ScoreCounter) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseQuizPage');
  }

  search($event: UIEvent) {
    
  }

  goToQuestion() {
    const question: Question = this.game.start();
    this.score.reset();
    setTimeout(() => this.navCtrl.push(QuestionAnswerPage, {
      question: question
    }), 3000);
    this.navCtrl.push(QuestionReadingPage, {
      question: question
    });
  }

  randomQuiz() {
    const question: Question = this.game.start();
    this.score.reset();
    setTimeout(() => this.navCtrl.push(QuestionAnswerPage, {
      question: question
    }), 3000);
    this.navCtrl.push(QuestionReadingPage, {
      question: question
    });
  }
}
