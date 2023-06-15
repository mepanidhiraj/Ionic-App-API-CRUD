import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-data',
    loadChildren: () => import('./pages/add-data/add-data.module').then( m => m.AddDataPageModule)
  },
  {
    path: 'edit-data',
    loadChildren: () => import('./pages/edit-data/edit-data.module').then( m => m.EditDataPageModule)
  },
  {
    path: 'del-data',
    loadChildren: () => import('./pages/del-data/del-data.module').then( m => m.DelDataPageModule)
  },
  {
    path: 'view-data',
    loadChildren: () => import('./pages/view-data/view-data.module').then( m => m.ViewDataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
