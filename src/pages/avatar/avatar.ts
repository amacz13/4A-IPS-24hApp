import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {CatPage} from "./cat/cat";
import {AvatarProvider} from "../../providers/avatar/avatar";

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
export class AvatarPage implements OnInit {
  static cats = new Map();
  static nbCats = new Array();

  static loaded = false;

  constructor(public navCtrl: NavController, private provider: AvatarProvider) {
    AvatarPage.cats.set(0, {img: 'assets/imgs/avatar/2hair/a.png', new: false, cat:'2hair'})
    AvatarPage.nbCats.push(0);
  }

  ngOnInit(): void {
    console.log(this.cats);
    console.log(this.nbCats);
  }

  show(cat) {
    this.navCtrl.push(CatPage, {cat: cat});
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

}
