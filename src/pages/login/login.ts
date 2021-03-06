import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { VerificationPage } from '../verification/verification';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // ngAfterViewInit();
  constructor(private alertCtrl: AlertController, private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  // ngAfterViewInit() {
  //     // let tabs = document.querySelectorAll('.show-tabbar');
  //     // if (tabs !== null) {
  //     //     Object.keys(tabs).map((key) => {
  //     //         tabs[key].style.display = 'none';
  //     //     });
  //     // }
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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

  goToRegister(){
    this.app.getRootNav().push(RegisterPage);
  }

}
