import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, IonicPageModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ComponentsModule} from "../components/components.module";
<<<<<<< HEAD
import {MultiplayerSelectionPage} from '../pages/multiplayer-selection/multiplayer-selection';
import {ChooseCategoryPage} from '../pages/choose-category/choose-category';
=======
import {MultiplayerSelectionPageModule} from "../pages/multiplayer-selection/multiplayer-selection.module";
import {AvatarPageModule} from "../pages/avatar/avatar.module";
>>>>>>> master

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    HomePage,
    MultiplayerSelectionPage,
    ChooseCategoryPage
=======
    HomePage
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    HomePage,
    MultiplayerSelectionPage,
    ChooseCategoryPage
=======
    HomePage
>>>>>>> master
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MultiplayerSelectionPageModule,
    AvatarPageModule
  ]
})
export class AppModule {}
