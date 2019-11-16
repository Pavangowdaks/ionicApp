import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'banks', pathMatch: 'full' },
  { path: 'banks', loadChildren: () => import('./pages/banks/banks.module').then( m => m.BanksPageModule)},
  { path: 'bank-details/:bank', loadChildren: './pages/bank-details/bank-details.module#BankDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
