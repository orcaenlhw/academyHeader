import {
  Component,
  ViewEncapsulation,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { IonContent, IonToolbar } from '@ionic/angular';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-headertop',
  templateUrl: './headertop.page.html',
  styleUrls: ['./headertop.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeadertopPage implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  @ViewChild(IonToolbar, { static: true, read: ElementRef }) toolbar: ElementRef;
  @ViewChild(IonToolbar, { static: true, read: ElementRef }) toolinside: ElementRef;

  hiding = 'toolbarTopHide';
  contentToolbar = 'toolbarBottomShow';

  constructor(private renderer: Renderer2, private domCtrl: DomController) {}

  ngOnInit() {}

  onScroll(event) {
    let scrollTop = event.detail.scrollTop;
    console.log('e', scrollTop);

    let toolbarHeight = this.toolbar.nativeElement.offsetHeight;
    console.log("theight", toolbarHeight);

    if (scrollTop < toolbarHeight) {
      this.hiding = 'toolbarTopHide';
      this.contentToolbar = 'toolbarBottomShow';
    } else {
      this.hiding = 'toolbarTopShow';
      this.contentToolbar = 'toolbarBottomHide';
    }

    let topbar = -30;
    let oriOpacity = 0;
    let newPosition;
    let newOpacity;

    newPosition = scrollTop / 6 + topbar;
    newOpacity = scrollTop / 100;
    console.log('np', newPosition);
    console.log('no', newOpacity);
    
    if ( scrollTop <= 170) {
        this.toolbar.nativeElement.style.setProperty('top', `${newPosition}px`);
        this.toolbar.nativeElement.style.setProperty('opacity', newOpacity);
    }
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
