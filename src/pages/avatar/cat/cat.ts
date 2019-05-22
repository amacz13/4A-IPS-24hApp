import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {File} from '@ionic-native/file';
import {AvatarPage} from "../avatar";
import {PersoComponent} from "../../../components/perso/perso";

/**
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html',
})
export class CatPage {
  cat: string = '1hat';

  elements = new Array();

  constructor(file: File,
              platform: Platform,
              navParams: NavParams,
              private navCtrl: NavController) {
    this.cat = navParams.get('cat');

    platform.ready().then(() => {
      file.listDir(file.applicationDirectory, "www/assets/imgs/avatar/"+this.cat)
        .then(list => {
          for (let f of list) {
            if (f.isFile) {
              this.elements.push({img: f.fullPath.substring(4), new: false});
            }
          }
        })
        .catch(e => console.log(e))
    });
  }

  choose(img) {
    console.log('push img:', img);
    if (this.cat.includes('hat')) {
      PersoComponent.hat = img;
    }
    if (this.cat.includes('hair')) {
      PersoComponent.hair = img;
    }
    if (this.cat.includes('face')) {
      PersoComponent.face = img;
    }
    if (this.cat.includes('top')) {
      PersoComponent.top = img;
    }
    if (this.cat.includes('bottom')) {
      PersoComponent.bottom = img;
    }
  }

}
