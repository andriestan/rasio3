import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

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

  // ngAfterViewInit();
  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams) {
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
    console.log('ionViewDidLoad RegisterPage');
  }

}
