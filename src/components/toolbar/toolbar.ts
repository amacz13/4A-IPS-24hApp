import {Component, EventEmitter, Output} from '@angular/core';
import {NavController} from "ionic-angular";
import {AvatarPage} from "../../pages/avatar/avatar";

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

  goToAvatar(): void {
    this.navCtrl.push(AvatarPage);
  }

  play(): void {
    this.menu.emit(true);
  }
}
