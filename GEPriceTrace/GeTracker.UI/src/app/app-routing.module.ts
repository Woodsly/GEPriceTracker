import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemSearchComponent } from './components/item-search/item-search.component';

const routes: Routes = [
  { path: '', component: ItemSearchComponent},
  { path: 'itemSearch', component: ItemSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
