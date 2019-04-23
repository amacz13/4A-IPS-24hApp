import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //TODO: solo and multijoueurs buttons activated only when clicking on "play" button

  constructor(public navCtrl: NavController) {

  }

  push(page: string): void {
    this.navCtrl.push(page);
  }
}
