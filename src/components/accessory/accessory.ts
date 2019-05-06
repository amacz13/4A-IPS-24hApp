import {Component, Input} from '@angular/core';

/**
 * Generated class for the AccessoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accessory',
  templateUrl: 'accessory.html'
})
export class AccessoryComponent {
  @Input() img: string = "imgs/logo.png";

  constructor() {
    console.log('loaded accessory');
  }

}
