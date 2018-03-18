import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  transactions: any;

  constructor(public navCtrl: NavController) {
    this.transactions = [{name:'One', icon:'airplane', impact:-10}
                         ];
  }

}
