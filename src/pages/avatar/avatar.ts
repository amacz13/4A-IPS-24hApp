import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AvatarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'page-avatar'
})
@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html',
})
export class AvatarPage {
  
  accessories = [
      {img: "assets/imgs/avatar/1hat/Hat.png", new: true},
      {img: "assets/imgs/avatar/2hair/a.png", new: false}
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let accessory of this.accessories) {
      console.log(accessory);
    }

  }

}
