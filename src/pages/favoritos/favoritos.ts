//aqui é o controller
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-favoritos', //selector é a tag angular -- é o seletor que será usado no elemento
  templateUrl: 'favoritos.html' //interligar o controller ao view
})
export class FavoritosPage {

  constructor(public navCtrl: NavController) {

  }

}
