import { Injectable } from '@angular/core';
import {Platform} from "ionic-angular";
import {File} from "@ionic-native/file";


@Injectable()
export class AvatarProvider {
  private _nbCats = new Array();
  private _cats = new Map();

  ready = false;

  constructor(private platform: Platform, private file: File) {}

  loadData() {
    return this.platform.ready().then(() => {
      return this.file.listDir(this.file.applicationDirectory, "www/assets/imgs/avatar/");
    })
      .then(list => {
        let i = 0
        return this.loadCat(i, list);
      })
      .catch(e => console.log(e));
  }

  private loadCat(i, list) {
    return new Promise(resolve => {
      let f = list[i];
      i++;
      if (f.isDirectory) {
        this._nbCats.push(i);
        this.file.listDir(this.file.applicationDirectory, "www/assets/imgs/avatar/"+f.name)
          .then(res => {
            this._cats.set(Number(f.name.charAt(0)),{cat: f.name, isNew: true, img: res[0].fullPath.substring(4)});
            if (i<list.length) {
              return this.loadCat(i, list);
            }
            else {
              resolve(true);
            }
          })
          .then(_ =>{if (_) resolve(true)})
          .catch(e => console.log(e));
      }
      return true;
    })
  }

  get nbCats(): any[] {
    return this._nbCats;
  }

  get cats(): Map<any, any> {
    return this._cats;
  }
}
