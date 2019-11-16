import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { NoResourcesComponent } from './no-resources/no-resources.component';

@NgModule({
  declarations: [NoResourcesComponent],
  imports: [IonicModule, CommonModule],
  exports: [NoResourcesComponent]
})
export class ComponentComponentsModule {}
