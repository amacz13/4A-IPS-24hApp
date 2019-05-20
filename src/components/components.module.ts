import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar';
import {IonicModule} from "ionic-angular";
import { AccessoryComponent } from './accessory/accessory';
import { PersoComponent } from './perso/perso';
@NgModule({
	declarations: [
	  ToolbarComponent,
    AccessoryComponent,
    PersoComponent
  ],
  imports: [IonicModule],
	exports: [
	  ToolbarComponent,
    AccessoryComponent,
    PersoComponent
  ]
})
export class ComponentsModule {}
