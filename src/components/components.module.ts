import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar';
import {IonicModule} from "ionic-angular";
import { PersoComponent } from './perso/perso';
@NgModule({
	declarations: [
	  ToolbarComponent,
    PersoComponent
  ],
  imports: [IonicModule],
	exports: [
	  ToolbarComponent,
    PersoComponent
  ]
})
export class ComponentsModule {}
