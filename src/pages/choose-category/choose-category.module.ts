import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseCategoryPage } from './choose-category';

@NgModule({
  declarations: [
    ChooseCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseCategoryPage),
  ],
  exports: [
    MultiplayerSelectionPage
  ]
})
export class ChooseCategoryPageModule {}
