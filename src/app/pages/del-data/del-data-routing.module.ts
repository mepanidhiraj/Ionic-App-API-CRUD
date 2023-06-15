import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelDataPage } from './del-data.page';

const routes: Routes = [
  {
    path: '',
    component: DelDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelDataPageRoutingModule {}
