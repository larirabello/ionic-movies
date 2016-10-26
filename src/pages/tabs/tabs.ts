import { Component } from '@angular/core';

import { FavoritosPage } from '../favoritos/favoritos';
import { SobrePage } from '../sobre/sobre';
import { RecentesPage } from '../recentes/recentes';
import { SeriesPage } from '../series/series';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RecentesPage;
  tab2Root: any = SeriesPage;
  tab3Root: any = FavoritosPage;
  tab4Root: any = SobrePage;


  constructor() {

  }
}
