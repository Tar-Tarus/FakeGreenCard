import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImpactPage } from './impact';

@NgModule({
  declarations: [
    ImpactPage,
  ],
  imports: [
    IonicPageModule.forChild(ImpactPage),
  ],
})
export class ImpactPageModule {}


import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-impact',
  templateUrl: 'impact.html'
})

export class ImpactPage {

  constructor(public modalCtrl: ModalController) { }

  public openModal() :void {
    let myModal = this.modalCtrl.create(SampleModalPage);
    myModal.present();
  }
}