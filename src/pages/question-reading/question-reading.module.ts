import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionReadingPage } from './question-reading';

@NgModule({
  declarations: [
    QuestionReadingPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionReadingPage),
  ],
})
export class QuestionReadingPageModule {}
