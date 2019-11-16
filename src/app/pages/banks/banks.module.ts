import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BanksPage } from './banks.page';
import { ComponentComponentsModule } from './../../components/components';

const routes: Routes = [
  {
    path: '',
    component: BanksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BanksPage],
  entryComponents: [
    BanksPage
  ]
})
export class BanksPageModule {}
