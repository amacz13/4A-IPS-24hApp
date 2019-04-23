import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the ToolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toolbar-component',
  templateUrl: 'toolbar.html'
})
export class ToolbarComponent {

  text: string;

  constructor(private navCtrl: NavController) {
  }

  push(page: string): void {
    this.navCtrl.push(page);
  }
}
