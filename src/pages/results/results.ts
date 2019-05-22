import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AvatarProgressPage} from '../avatar-progress/avatar-progress';
import {ScoreCounter} from "../../logic/score-counter";

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  constructor(public navCtrl: NavController, private score: ScoreCounter) {
  }

  goToProgress() {
    this.navCtrl.push(AvatarProgressPage)
      .catch(e => console.log(e));
  }
}
