import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {AvatarPage} from "../../pages/avatar/avatar";

/**
 * Generated class for the AccessoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accessory',
  templateUrl: 'accessory.html'
})
export class AccessoryComponent {
  @Input() cat: string;

  accessories = [
    {img: "assets/imgs/avatar/1hat/Hat.png", new: true},
    {img: "assets/imgs/avatar/2hair/a.png", new: false}
  ];

  constructor(private navCtrl: NavController) {
  }

  click(e) {
    console.log(e);
  }

  choose(img) {
    console.log('push to cat:', img);
    this.navCtrl.push(AvatarPage, {delegate: this, img: img, cat: this.cat})
      .then(_ => console.log(_))
      .catch(e => console.log(e));
    console.log(img);
    // console.log(this.navCtrl.getPrevious());
    // this.choosen.emit(img);
  }

}
