import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AvatarPage} from "../pages/avatar/avatar";
import {AvatarProvider} from "../providers/avatar/avatar";
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //TODO: Change following line
  rootPage:any = AvatarPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              avatar: AvatarProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      // splashScreen.hide()

      avatar.loadData()
        .then(() => {
          splashScreen.hide();
          avatar.ready = true;
          AvatarPage.cats = avatar.cats;
          AvatarPage.nbCats = avatar.nbCats;
          AvatarPage.loaded = true;
        })
        .catch(e => console.log(e));

    })
      .catch(e => console.log(e));
  }
}

