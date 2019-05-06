import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar';
import {IonicModule} from "ionic-angular";
import { AccessoryComponent } from './accessory/accessory';
@NgModule({
	declarations: [
	  ToolbarComponent,
    AccessoryComponent
  ],
  imports: [IonicModule],
	exports: [
	  ToolbarComponent,
    AccessoryComponent
  ]
})
export class ComponentsModule {}
