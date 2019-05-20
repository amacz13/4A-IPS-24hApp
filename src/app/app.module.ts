import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ComponentsModule} from "../components/components.module";
import {MultiplayerSelectionPage} from '../pages/multiplayer-selection/multiplayer-selection';
import {ChooseCategoryPage} from '../pages/choose-category/choose-category';
import {ChooseQuizPage} from '../pages/choose-quiz/choose-quiz';
import {AvatarPage} from "../pages/avatar/avatar";
import {QuestionReadingPage} from '../pages/question-reading/question-reading';
import {QuestionAnswerPage} from '../pages/question-answer/question-answer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MultiplayerSelectionPage,
    ChooseCategoryPage,
    ChooseQuizPage,
    QuestionReadingPage,
    QuestionAnswerPage,
    AvatarPage
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
    ChooseCategoryPage,
    ChooseQuizPage,
    QuestionReadingPage,
    QuestionAnswerPage,
    AvatarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
