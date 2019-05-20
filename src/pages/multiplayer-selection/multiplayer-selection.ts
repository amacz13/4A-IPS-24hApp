import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {ChooseCategoryPage} from '../choose-category/choose-category';

@Component({
  selector: 'page-multiplayer-selection',
  templateUrl: 'multiplayer-selection.html',
})
export class MultiplayerSelectionPage {

  private invited = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  search($event: UIEvent) {
    console.log($event);
  }

  goToCategories() {
    this.navCtrl.push(ChooseCategoryPage);
  }

  updateInviteButton() {
    if (!this.invited) this.toastCtrl.create({
      message: 'Le joueur a bien été invité !',
      duration: 5000,
      position: 'bottom'
    }).present();
    this.invited = !this.invited;
  }
}
