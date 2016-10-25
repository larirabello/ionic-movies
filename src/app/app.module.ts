import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';//pagina principal
import { SobrePage } from '../pages/sobre/sobre';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { RecentesPage } from '../pages/recentes/recentes';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
 //tudo que eu inserir preciso declarar em entry components e declarations
  declarations: [
    MyApp,
    SobrePage,
    FavoritosPage,
    RecentesPage,
    DetalhesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //forma de adicionar algo novo que criei no projeto, como uma página nova
  entryComponents: [
    MyApp,
    SobrePage,
    FavoritosPage,
    RecentesPage,
    DetalhesPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
