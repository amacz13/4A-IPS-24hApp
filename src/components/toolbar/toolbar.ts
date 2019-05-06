import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {AvatarPage} from "../../pages/avatar/avatar";
import {MultiplayerSelectionPage} from "../../pages/multiplayer-selection/multiplayer-selection";

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

  menuOpen: boolean = false;

  text: string;

  constructor(private navCtrl: NavController) {
  }

  goToAvatar(): void {
    this.navCtrl.push(AvatarPage);
  }
  goMultiplayer() {
    this.navCtrl.push(MultiplayerSelectionPage);
  }
}
