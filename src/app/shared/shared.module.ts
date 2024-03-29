import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';

//Components
import { SearchComponent } from 'src/app/components/search/search.component';
import { CustomComboComponent } from 'src/app/components/custom-combo/custom-combo.component';
import { ListaFilmesComponent } from '../components/lista-filmes/lista-filmes.component';
import { ItemFilmeComponent } from '../components/lista-filmes/item-filme/item-filme.component';
import { DialogMessageComponent } from '../components/dialog-message/dialog-message.component';
import { DialogQuestionComponent } from '../components/dialog-question/dialog-question.component';
import { AutoOpenMenuComponent } from 'src/app/components/auto-open-menu/auto-open-menu.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { DetalhesComponent } from '../pages/movie/detalhes/detalhes.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    SearchComponent,
    CustomComboComponent,
    ListaFilmesComponent,
    ItemFilmeComponent,
    DialogMessageComponent,
    DialogQuestionComponent,
    RatingComponent,
    DetalhesComponent,
    AutoOpenMenuComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatListModule,
    MatPaginatorModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SearchComponent,
    CustomComboComponent,
    ListaFilmesComponent,
    ItemFilmeComponent,
    DialogMessageComponent,
    DialogQuestionComponent,
    DetalhesComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatListModule,
    MatPaginatorModule,
    RatingComponent,
    AutoOpenMenuComponent,
  ],
})
export class SharedModule {}
