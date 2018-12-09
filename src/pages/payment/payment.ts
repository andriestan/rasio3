import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  halamanPay: string = 'notlogin';
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  searchQuery: string = '';
  items: any;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }


  initializeItems() {
    this.items = [
      {
        date: '2017-12-26',
        events: [
          {
            id: 1,
            title: 'First event'
          },
          {
            id: 3,
            title: 'Third event'
          }
        ]
      },
      {
        date: '2017-12-30',
        events: [
          {
            id: 2,
            title: 'Second event'
          }
        ]
      },
      {
        date: '2017-12-31',
        events: [
          {
            id: 4,
            title: 'Last event'
          }
        ]
      }
    ];
  }

  // presentAlert(ev: any) {
  //   const val = ev.target.value;
  //   let alert = this.alertCtrl.create({
  //     title: 'Low battery',
  //     subTitle: val,
  //     buttons: ['Dismiss']
  //   });
  //   alert.present();
  // }

  //ngambil semua data yang ada dari server dengan session
  getItems(ev: any) {

    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.map((item: any) => {
        item.events = item.events.filter((event) => {
          return (event.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        return item;
      })

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
