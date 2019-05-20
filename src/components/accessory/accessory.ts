import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Platform} from "ionic-angular";

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
  @Input() cat: string;
  @Output() return = new EventEmitter();

  accessories = [
    {img: "assets/imgs/avatar/1hat/Hat.png", new: true},
    {img: "assets/imgs/avatar/2hair/a.png", new: false}
  ];

  constructor(platform: Platform) {
    platform.backButton.subscribe(e => {
      this.return.emit(true);
    })
  }



}
