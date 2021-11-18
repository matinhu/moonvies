import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './pages/home/home.component';
import { GlobalService } from 'src/app/services/global.service';
import { HttpService } from 'src/app/services/http.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MovieComponent } from './pages/movie/movie.component';
import { AutoOpenMenuComponent } from './components/auto-open-menu/auto-open-menu.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { ItemPessoaComponent } from './components/lista-pessoas/item-pessoa/item-pessoa.component';
registerLocaleData(ptBr);
@NgModule({
  declarations: [AppComponent, HomeComponent, MovieComponent, ListaPessoasComponent, ItemPessoaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    MatMenuModule,
    HttpClientModule,
    HttpClientJsonpModule,
    // AutoOpenMenuComponent
  ],
  exports: [],
  providers: [
    HttpService,
    GlobalService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
