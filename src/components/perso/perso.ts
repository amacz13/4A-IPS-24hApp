import {Component, Input, OnInit} from '@angular/core';

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
export class PersoComponent implements OnInit {
  static hat: string;
  static hair: string;
  static face: string;
  static top: string;
  static bottom: string;

  static thisName: string;

  names = ['Fred', 'Bubulle', 'Gitoune'];

  @Input() _hat: string;
  @Input() _hair: string;
  @Input() _face: string;
  @Input() _top: string;
  @Input() _bottom: string;

  constructor() { }

  ngOnInit(): void {
    PersoComponent.hat = (this._hat != undefined)? this._hat: PersoComponent.hat;
    PersoComponent.hair = (this._hair != undefined)? this._hair: PersoComponent.hair;
    PersoComponent.face = (this._face != undefined)? this._face: PersoComponent.face;
    PersoComponent.top = (this._top != undefined)? this._top: PersoComponent.top;
    PersoComponent.bottom = (this._bottom != undefined)? this._bottom: PersoComponent.bottom;
  }

  get hat(): string {
    return PersoComponent.hat;
  }
  get hair(): string {
    return PersoComponent.hair;
  }
  get face(): string {
    return PersoComponent.face;
  }
  get top(): string {
    return PersoComponent.top;
  }
  get bottom(): string {
    return PersoComponent.bottom;
  }

  get name() {
    return PersoComponent.thisName;
  }
  set name(name) {
    PersoComponent.thisName = name;
  }

  alea() {
    let name = this.names[Math.trunc(Math.random()*this.names.length)];
    PersoComponent.thisName = name;
  }
}
