import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform) {
    platform.registerBackButtonAction(() => {

    switch (navCtrl.getActive().component.thisName) {
      case "QuestionReadingPage":
        break;
      case "QuestionAnswerPage":
        break;
      default:
        this.navCtrl.pop()
          .catch(e => console.log(e));
    }
  },1);}
}
