import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';

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

  constructor(private alertCtrl: AlertController, private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  goToVerif(){
    // this.app.getRootNav().push(VerificationPage);
    let alert = this.alertCtrl.create({
      title: 'Forbidden',
      subTitle: 'This apps is still on development',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
