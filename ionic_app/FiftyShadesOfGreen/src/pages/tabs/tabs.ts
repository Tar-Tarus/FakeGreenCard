import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ImpactPage } from '../impact/impact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ImpactPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
