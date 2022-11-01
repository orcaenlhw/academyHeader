import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadertopPageRoutingModule } from './headertop-routing.module';

import { HeadertopPage } from './headertop.page';
import { SharedDirectiveModule } from '../directives/shared-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadertopPageRoutingModule,
    SharedDirectiveModule
  ],
  declarations: [HeadertopPage]
})
export class HeadertopPageModule {}
