import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChooseQuizPage} from '../choose-quiz/choose-quiz';

@Component({
  selector: 'page-choose-category',
  templateUrl: 'choose-category.html',
})
export class ChooseCategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseCategoryPage');
  }

  search($event: UIEvent) {
    console.log($event);
  }

  goToQuizSelection() {
    this.navCtrl.push(ChooseQuizPage);
  }
}
