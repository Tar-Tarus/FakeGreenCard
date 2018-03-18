import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicPageModule, ModalController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the ImpactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@NgModule({
  declarations: [
    ImpactPage,
  ],
  imports: [
    IonicPageModule.forChild(ImpactPage),
  ],
})

@IonicPage()
@Component({
  selector: 'page-impact',
  templateUrl: 'impact.html',
})

export class ImpactPage {

  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  this.data = [{name:'Shopping', icon:'shopping_cart', impact:7},
               {name: 'Travel', icon:'airplanemode_active', impact: -4},
               {name:'Food', icon:'restaurant', impact:-2},
               {name:'Home', icon:'home', impact:6}
                         ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImpactPage');
  }

  public openModal() :void {
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }

}
