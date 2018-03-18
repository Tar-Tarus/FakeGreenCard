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
    this.transactions = [{descr:'One', date:'12.03.2018', amount:-10, impact:42, offset:13},
                         {descr:'Two', date:'12.03.2018', amount:-20, impact:42, offset:13},
                         {descr:'Three', date:'12.03.2018', amount:-30, impact:42, offset:13},
                         {descr:'Four', date:'12.03.2018', amount:-30, impact:42, offset:13},
                         {descr:'Five', date:'12.03.2018', amount:-30, impact:42, offset:13},
                         {descr:'Six', date:'12.03.2018', amount:-30, impact:42, offset:13},
                         {descr:'Seven', date:'12.03.2018', amount:-30, impact:42, offset:13},
                         {descr:'Eight', date:'12.03.2018', amount:-30, impact:42, offset:13},
                         {descr:'Nine', date:'12.03.2018', amount:-30, impact:42, offset:13},
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
