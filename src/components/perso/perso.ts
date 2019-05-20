import {Component, Input} from '@angular/core';

/**
 * Generated class for the PersoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'perso-component',
  templateUrl: 'perso.html'
})
export class PersoComponent {
  @Input() hat: string;
  @Input() hair: string;
  @Input() face: string;
  @Input() top: string;
  @Input() bottom: string;

  constructor() { }

}
