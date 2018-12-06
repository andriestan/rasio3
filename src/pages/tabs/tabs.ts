import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';
import { AddPage } from '../add/add';
import { PaymentPage } from '../payment/payment';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1 = HomePage;
  tab2 = PaymentPage;
  tab3 = AddPage;
  tab4 = NotificationsPage;
  tab5 = ProfilePage;

  constructor() {

  }
}
