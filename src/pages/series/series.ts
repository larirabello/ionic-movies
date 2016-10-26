import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Series page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-series',
  templateUrl: 'series.html'
})
export class SeriesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Series Page');
  }

}
