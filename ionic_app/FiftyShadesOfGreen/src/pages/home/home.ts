import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  transactions: any;

  constructor(public navCtrl: NavController) {
    this.transactions = [{descr:'One', date:'12.03.2018', amount:-10},
                         {descr:'Two', date:'12.03.2018', amount:-20},
                         {descr:'Three', date:'12.03.2018', amount:-30},
                         ];
  }

}
