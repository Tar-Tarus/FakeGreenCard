import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  transactions: any;
  impactmode: number;

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications) {
    this.transactions = [{descr:'Holy Cow', date:'18.03.2018', amount:-28, impact:-26, offset:1.28},
                         {descr:'Migros', date:'17.03.2018', amount:-23, impact:-7, offset:0.36},
                         {descr:'EasyJet', date:'17.03.2018', amount:-98, impact:-168, offset:4.5},
                         {descr:'Co-Op', date:'15.03.2018', amount:-12, impact:3, offset:0.2},
                         {descr:'Electricity', date:'15.03.2018', amount:-30, impact:8, offset:0},
                         {descr:'Migros', date:'13.03.2018', amount:-67, impact:-14, offset:0.73},
                         ];

    this.impactmode = 0;

    // Schedule delayed notification
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       at: new Date(new Date().getTime() + 10),
       led: 'FF0000',
       sound: null
    });

  }

  public toggleImpactMode() : void {
    var idx = this.slides.getActiveIndex();
    console.log(idx);
    if (idx == 0) {
      this.impactmode = 0;
    } else if (idx == 1) {
      this.impactmode = 1;
    } else {
      this.impactmode = 3;
    }
  }

}
