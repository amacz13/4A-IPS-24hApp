import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AvatarProgressPage} from '../avatar-progress/avatar-progress';

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

  constructor(public navCtrl: NavController) {
  }

  goToProgress() {
    this.navCtrl.push(AvatarProgressPage)
      .catch(e => console.log(e));
  }
}
