import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MoviePreviewComponent } from './search/movie-preview/movie-preview.component';

import { MovieService } from './movie.service';
import { FooterComponent } from './footer.component';
import { DisplayMovieComponent } from './display-movie.component'
import { HeaderComponent } from './header.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MoviePreviewComponent,
    FooterComponent,
    DisplayMovieComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers:[MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
