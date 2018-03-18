import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the OffSetModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-off-set-modal',
  templateUrl: 'off-set-modal.html',
})
export class OffSetModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  	this.offset_items = [{name:'National Park Service', date:'14-03-2017', offset:'1.20', img: 'assets/imgs/nps.png'},
                         {name:'World Wildlife Fund', date:'12-03-2017', offset:'20.00', img: 'assets/imgs/wwf.png'},
                         {name:'Wildlife Conservation Network', date:'12-03-2017', offset: '3.00', img: 'assets/imgs/wcn.png'},
                         {name:'Rainforest Trust', date:'12-03-2017', offset: '2.53', img: 'assets/imgs/raintrust.png'}
	                 ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffSetModalPage');
  }

  closeModal() {
  	console.log(this)
  	this.viewCtrl.dismiss();
  }

}
