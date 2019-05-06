import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseQuizPage } from './choose-quiz';

@NgModule({
  declarations: [
    ChooseQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseQuizPage),
  ],
})
export class ChooseQuizPageModule {}
