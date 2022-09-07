import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements OnInit{

  @Input('appHideHeader') toolbar: any;
  private toolbarHeight = 50;
  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController
  ) { }

  ngOnInit() {
    //console.log('TEST', this.toolbar);
    
    this.toolbar = this.toolbar.el;

    this.domCtrl.read(() => {
      this.toolbarHeight = this.toolbar.clientHeight;
    });
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    //console.log("event", $event);

    const scrollTop = $event.detail.scrollTop;
    console.log("st", scrollTop);

    let newPosition = (scrollTop / 5);
    if (newPosition < this.toolbarHeight) {
      newPosition = this.toolbarHeight;
    }
    console.log("np", newPosition)
    let newOpacity = 1 - (newPosition / 20);
    console.log("newOpacity", newOpacity);

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.toolbar, 'top', `-${newPosition}px`);
      this.renderer.setStyle(this.toolbar, 'opacity', newOpacity);
    });
  }
}
