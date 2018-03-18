import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  shopping_items:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

	this.shopping_items = [{name:'Nutella', date:'12-03-2017', impact:-2, img: 'assets/imgs/Nutella.png'},
                         {name:'Dove Original AntiPerspirant', date:'12-03-2017', impact:-1, img: 'assets/imgs/dove.jpg'},
                         {name:'reBag Reusable Bag', date:'12-03-2017', impact:+3, img: 'assets/imgs/shopping_bag.jpg'},
                         {name:'Bio Tomato Plant', date:'12-03-2017', impact:+3, img: 'assets/imgs/tomatoplant.jpg'}
	                 ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeModal() {
  	this.viewCtrl.dismiss();
  }



}

