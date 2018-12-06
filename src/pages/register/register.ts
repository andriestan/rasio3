import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { VerificationPage } from '../verification/verification';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  goToVerif(){
    this.app.getRootNav().push(VerificationPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
