import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MovieComponent } from 'src/app/pages/movie/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent},
  { path: 'movie', component: MovieComponent},
  { path: 'movie/now-playing', component: MovieComponent},
  { path: 'movie/upcoming', component: MovieComponent},
  { path: 'movie/top-rated', component: MovieComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
