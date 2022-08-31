import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header.directive';
import { FadeHeaderDirective } from './fade-header.directive';
import { GoWildDirective } from './gowild.directive';



@NgModule({
  declarations: [HideHeaderDirective, FadeHeaderDirective, GoWildDirective],
  imports: [
    CommonModule
  ],
  exports: [HideHeaderDirective, FadeHeaderDirective, GoWildDirective]
})
export class SharedDirectiveModule { }
