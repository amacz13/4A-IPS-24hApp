import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiplayerSelectionPage } from './multiplayer-selection';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    MultiplayerSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiplayerSelectionPage),
    ComponentsModule,
  ],
  exports: [
    MultiplayerSelectionPage
  ]
})
export class MultiplayerSelectionPageModule {}
