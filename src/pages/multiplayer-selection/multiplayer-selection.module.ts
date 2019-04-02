import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiplayerSelectionPage } from './multiplayer-selection';

@NgModule({
  declarations: [
    MultiplayerSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiplayerSelectionPage),
  ],
})
export class MultiplayerSelectionPageModule {}
