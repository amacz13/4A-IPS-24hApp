import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {File} from "@ionic-native/file";
import {CatPage} from "./cat/cat";

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
  cats = new Map();
  nbCats = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, file:File, platform:Platform) {
    platform.ready().then(() => {
      file.listDir(file.applicationDirectory, "www/assets/imgs/avatar/")
        .then(list => {
          console.log(list);
          let i=1;
          for (let f of list) {
            if (f.isDirectory) {
              this.nbCats.push(i);
              i++;
              file.listDir(file.applicationDirectory, "www/assets/imgs/avatar/"+f.name)
                .then(res => {
                  console.log(f.name, Number(f.name.charAt(0)));
                  this.cats.set(Number(f.name.charAt(0)),{cat: f.name, isNew: true, img: res[0].fullPath.substring(4)});
                  console.log(this.nbCats, this.cats.get(this.nbCats[0]));
                  console.log(1, this.cats.get(1));
                })
                .catch(e => console.log(e));
            }
          }
          console.log(this.nbCats);
        })
        .catch(e => console.log(e))
    });
  }

  ngOnInit() {}

  show(cat) {
    this.navCtrl.push(CatPage, {cat: cat});
  }

}
