import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { LoginPage } from '../login/login';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  halamanProfile: string = 'notlogin';
  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams) {

  }

  goToLogin(){
    // this.storage.set('pageShown', 'login');
  this.app.getRootNav().push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
