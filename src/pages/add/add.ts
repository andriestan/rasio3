import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

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
        type: 'Credit Card',
        processor: [
          {
            id: 14,
            title: 'Bank Central Asia',
            img: 'bca'
          },
          {
            id: 8,
            title: 'Bank Mandiri',
            img: 'mandiri'
          }
        ]
      },
      {
        type: 'Debit Card',
        processor: [
          {
            id: 8,
            title: 'Bank Mandiri',
            img: 'mandiri'
          },
          {
            id: 208,
            title: 'Maybank',
            img: 'maybank'
          }
        ]
      },
      {
        type: 'E-Wallet',
        processor: [
          {
            id: 999,
            title: 'OVO',
            img: 'ovo'
          }
        ]
      }
    ];
  }

  //ngambil semua data yang ada dari server dengan session
  getItems(ev: any) {

    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.map((item: any) => {
        item.processor = item.processor.filter((pay) => {
          return (pay.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        return item;
      })

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
