import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, IonicPageModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ComponentsModule} from "../components/components.module";
import {MultiplayerSelectionPage} from '../pages/multiplayer-selection/multiplayer-selection';
import {ChooseCategoryPage} from '../pages/choose-category/choose-category';
import {AvatarPageModule} from "../pages/avatar/avatar.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MultiplayerSelectionPage,
    ChooseCategoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MultiplayerSelectionPage,
    ChooseCategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvatarPageModule
  ]
})
export class AppModule {}
