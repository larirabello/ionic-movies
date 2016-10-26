import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetalhesPage } from '../detalhes/detalhes';

import { MovieProvider } from '../../providers/movie-provider';

@Component({
  selector: 'page-recentes',
  templateUrl: 'recentes.html',
  providers: [MovieProvider]
})
export class RecentesPage {
// o any retira a "tipagem" e deixa mais parecido com o js
  private movies:any;
  private search:string;

  constructor(public navCtrl: NavController,
              public movieProvider: MovieProvider) {


    this.search = "";
    this.movies = [];    
  
}
     exibirDetalhes(movie:any) {
       console.log(movie);
      this.navCtrl.push(DetalhesPage, {movie:movie}); //adiciona a classe no topo da pilha 
     }

     onSearchChange() {
       console.log(this.search);

       this.movieProvider.search(this.search).then((data) => {
         this.movies = data.results;
       }); 

     }
}
