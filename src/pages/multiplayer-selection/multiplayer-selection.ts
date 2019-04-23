import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ChooseCategoryPage} from '../choose-category/choose-category';

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

  goToCategories() {
    this.navCtrl.push(ChooseCategoryPage);
  }
}
