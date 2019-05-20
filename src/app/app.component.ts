import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = AvatarPage;
  //TODO: Uncomment following line
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, scOr: ScreenOrientation) {
    platform.ready().then(() => {

      splashScreen.hide();
    });
  }
}

