import { Component } from '@angular/core';
import {AlertController, NavController, Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
    platform.registerBackButtonAction(() => {

    switch (navCtrl.getActive().component.thisName) {
      case "QuestionReadingPage":
      case "QuestionAnswerPage":
      case "ResultsPage":
      case "AvatarProgressPage":
        this.alertCtrl.create({
          title: 'Quitter le Quiz',
          message: 'Voulez-vous quitter le quiz ?',
          buttons: [
            {
              text: 'Non',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Oui',
              handler: () => {
                this.navCtrl.setRoot(HomePage);
              }
            }
          ]
        });
        break;
      case "CatComponent":
        this.navCtrl.pop({animate: false})
          .catch(e => console.log(e));
      default:
        this.navCtrl.pop()
          .catch(e => console.log(e));
    }
  },1);}
}
