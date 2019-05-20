import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ScoreCounter {

  private point = 0;

  constructor() {

  }

  win() {
    this.point++;
  }

  log(){
    console.log(this.point);
  }
}
