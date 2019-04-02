import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MultiplayerSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multiplayer-selection',
  templateUrl: 'multiplayer-selection.html',
})
export class MultiplayerSelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  search($event: UIEvent) {
    console.log($event);
  }
}
