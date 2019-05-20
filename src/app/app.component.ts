import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AvatarPage} from "../pages/avatar/avatar";
import {AvatarProvider} from "../providers/avatar/avatar";
import { HomePage } from '../pages/home/home';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AvatarPage;
  //TODO: Uncomment following line
  // rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, scOr: ScreenOrientation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      avatar.loadData()
        .then(() => {
          splashScreen.hide()
          avatar.ready = true;
          AvatarPage.cats = avatar.cats;
          AvatarPage.nbCats = avatar.nbCats;
          AvatarPage.loaded = true;
          console.log('done');
        });

    });
  }
}

