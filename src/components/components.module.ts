import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [ToolbarComponent],
	imports: [IonicModule],
	exports: [ToolbarComponent]
})
export class ComponentsModule {}
