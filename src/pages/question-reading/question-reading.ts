import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {Question} from "../../logic/question";

/**
 * Generated class for the QuestionReadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-reading',
  templateUrl: 'question-reading.html',
})
export class QuestionReadingPage {
  question: Question;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.question = navParams.get("question");
  }
}
