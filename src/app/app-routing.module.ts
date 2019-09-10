import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DataResolverService} from './services/data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'list', loadChildren: './tasklists-page/tasklists-page.module#TasklistsPagePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'list/:id',
    resolve: {
    special: DataResolverService
    },
    loadChildren: './tasks-page/tasks-page.module#TasksPagePageModule' 
  },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }