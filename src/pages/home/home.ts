import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MultiplayerSelectionPage} from '../multiplayer-selection/multiplayer-selection';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  menuOpen: boolean = false;

  //TODO: solo and multijoueurs buttons activated only when clicking on "play" button

  constructor(public navCtrl: NavController) {

  }

  goMultiplayer() {
    this.navCtrl.push(MultiplayerSelectionPage);
  }

  push(page: string): void {
    this.navCtrl.push(page);
  }
}
