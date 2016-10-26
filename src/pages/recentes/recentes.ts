import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'page-recentes',
  templateUrl: 'recentes.html'
})
export class RecentesPage {
// o any retira a "tipagem" e deixa mais parecido com o js
  private movies:any;
  private search:string;

  constructor(public navCtrl: NavController) {

    this.search = "";
    this.movies = [];

    this.movies.push({
      title: 'Clube da Luta'
    });

    this.movies.push({
      title: 'Titanic'
    });

    this.movies.push({
      title: 'Lagoa Azul'
    });

    this.movies.push({
      title: 'Rocky'
    });

    this.movies.push({
      title: 'Star Wars'
    });
    
  }
     exibirDetalhes(movie:any) {
       console.log(movie);
      this.navCtrl.push(DetalhesPage, {movie:movie}); //adiciona a classe no topo da pilha 
     }

     onSearchChange() {
       console.log(this.search);
     }
}
