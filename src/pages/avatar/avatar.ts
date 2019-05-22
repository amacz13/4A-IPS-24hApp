import {Component} from '@angular/core';
import {IonicPage, NavController, NavOptions} from 'ionic-angular';
import {CatPage} from "./cat/cat";
import {PersoComponent} from "../../components/perso/perso";

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
  static cats = new Map();
  static nbCats = new Array();

  static loaded = false;

  names = ['Fred', 'Bubulle', 'Gitoune'];

  constructor(public navCtrl: NavController) {}

  show(cat) {
    console.log('push to cat:', cat);
    this.navCtrl.push(CatPage, {cat: cat})
      .then(_ => console.log(_))
      .catch(e => console.log(e));
  }

  get nbCats() {
    return AvatarPage.nbCats;
  }

  get cats() {
    return AvatarPage.cats;
  }

  get loaded() {
    return AvatarPage.loaded;
  }

  get hat() {
    return (PersoComponent.hat == undefined)? this.cats.get(1).img: PersoComponent.hat;
  }
  get hair() {
    return (PersoComponent.hair == undefined)? this.cats.get(2).img: PersoComponent.hair;
  }
  get face() {
    return (PersoComponent.face == undefined)? this.cats.get(3).img: PersoComponent.face;
  }
  get top() {
    return (PersoComponent.top == undefined)? this.cats.get(4).img: PersoComponent.top;
  }
  get bottom() {
    return (PersoComponent.bottom == undefined)? this.cats.get(5).img: PersoComponent.bottom;
  }

}
