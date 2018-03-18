import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { OffSetModalPage } from '../off-set-modal/off-set-modal';


/**
 * Generated class for the OffsetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offset',
  templateUrl: 'offset.html',
})
export class OffsetPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  this.data = [{name:'Forestry', icon:'fa fa-tree', impact:7},
               {name: 'Energy', icon:'fa fa-tachometer', impact: -4},
               {name:'Sanitation', icon:'fa fa-leaf', impact:-2},
               {name:'Biomass', icon:'fa fa-leaf', impact:6}
                         ];

  }

  openModal() {
    let myModal = this.modalCtrl.create(OffSetModalPage);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffsetPage');
  }

}
