import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'example',
    loadChildren: () => import('./modules/example/example.module')
      .then(mod => mod.ExampleModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module')
      .then(mod => mod.AboutModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }