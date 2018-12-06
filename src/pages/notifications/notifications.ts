import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.halamanNotif = 'notlogin';
  }

  goToLogin(){
    // this.storage.set('pageShown', 'login');
    // this.navCtrl.push(LoginPage);
    this.app.getRootNav().push(LoginPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

}
