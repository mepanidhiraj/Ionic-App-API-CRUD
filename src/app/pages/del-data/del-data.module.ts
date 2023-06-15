import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelDataPageRoutingModule } from './del-data-routing.module';

import { DelDataPage } from './del-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelDataPageRoutingModule
  ],
  declarations: [DelDataPage]
})
export class DelDataPageModule {}
