import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SeriesProvider } from '../../providers/serie-provider';

/*
  Generated class for the Series page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
  providers: [SeriesProvider]
})
export class SeriesPage {

  private series:any;
  private search:string;

  constructor(public navCtrl: NavController,
              public seriesProvider: SeriesProvider) {

                 this.search = "";
                this.series = [];   

              }

    exibirDetalhes(serie:any) {
        console.log(serie);
        this.navCtrl.push(SeriesPage, {serie:serie}); //adiciona a classe no topo da pilha 
      }

     onSearchChange() {
       console.log(this.search);

       this.seriesProvider.search(this.search).then((data) => {
         this.series = data.results;
       }); 

     }

}
