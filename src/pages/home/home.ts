import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MultiplayerSelectionPage} from '../multiplayer-selection/multiplayer-selection';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goMultiplayer() {
    this.navCtrl.push(MultiplayerSelectionPage);
  }
}
