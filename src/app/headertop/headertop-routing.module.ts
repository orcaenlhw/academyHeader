import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadertopPage } from './headertop.page';

const routes: Routes = [
  {
    path: '',
    component: HeadertopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadertopPageRoutingModule {}
