import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvatarPage } from './avatar';

@NgModule({
  declarations: [
    AvatarPage,
  ],
  imports: [
    IonicPageModule.forChild(AvatarPage),
  ],
  exports: [
    AvatarPage
  ]
})
export class AvatarPageModule {}
