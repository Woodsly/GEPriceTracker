import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { baseApiUrl } from './config';
import { environment } from './environments/environment';
import { ItemSearchComponent } from './components/item-search/item-search.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WikiSearchComponent } from './components/wiki-search/wiki-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchComponent,
    WikiSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'itemSearch', component: ItemSearchComponent},
      { path: 'wikiSearch', component: WikiSearchComponent}
    ])
  ],
  providers: [
    baseApiUrl,{provide: 'ENVIRONMENT', useValue: environment}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
