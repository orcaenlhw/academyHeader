import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeHeader]'
})
export class FadeHeaderDirective implements OnInit{

  @Input('appFadeHeader') toolbar: any;
  constructor(
    private domCtrl: DomController
  ) { }

  ngOnInit() {
    //console.log('TEST', this.toolbar);
    this.toolbar = this.toolbar.el;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    let scrollTop = $event.detail.scrollTop;
    console.log("e", scrollTop);
    
    if (scrollTop >= 0) {
      //this.toolbar = 'toolbarhide';
      //this.toolbar.style.setProperty('opacity',`0`);

      this.domCtrl.write(() => {
        this.toolbar.style.setProperty('opacity',`0`);
    });
    }

    const hexDist = scrollTop.toString(16);
    console.log(hexDist);

    // this.domCtrl.write(() => {
    //   this.toolbar.style.setProperty('--background', `#7b7b7b${hexDist}`);
    // });
  }
}
