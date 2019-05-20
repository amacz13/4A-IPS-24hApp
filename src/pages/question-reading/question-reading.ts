import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  label: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.label = navParams.get("label");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionReadingPage');
  }

}
