import {Component, EventEmitter, Output} from '@angular/core';
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
  @Output() menu : EventEmitter<boolean>;

  constructor(private navCtrl: NavController) {
    this.menu = new EventEmitter();
  }

  push(page: string): void {
    console.log('push page : ', page);
    this.navCtrl.push(page);
  }

  play(): void {
    this.menu.emit(true);
  }
}
