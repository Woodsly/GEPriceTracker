import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemSearchComponent } from './components/item-search/item-search.component';
import { WikiSearchComponent } from './components/wiki-search/wiki-search.component';

const routes: Routes = [
  { path: '', component: ItemSearchComponent},
  { path: 'itemSearch', component: ItemSearchComponent},
  {path: 'wikiSearch', component: WikiSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
