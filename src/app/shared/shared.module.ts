import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

//Components
import { SearchComponent } from 'src/app/components/search/search.component';
import { CustomComboComponent } from 'src/app/components/custom-combo/custom-combo.component';
import { ListaFilmesComponent } from '../components/lista-filmes/lista-filmes.component';
import { ItemFilmeComponent } from '../components/lista-filmes/item-filme/item-filme.component';

@NgModule({
  declarations: [
    SearchComponent,
    CustomComboComponent,
    ListaFilmesComponent,
    ItemFilmeComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    FormsModule,
    SearchComponent,
    CustomComboComponent,
    ListaFilmesComponent,
    ItemFilmeComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule
  ],
})
export class SharedModule {}
