import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGoWild]'
})
export class GoWildDirective implements OnInit {
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Sub Header!');

    this.renderer.addClass(this.el.nativeElement, 'wild');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
    
    this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', 'true');

    this.renderer.removeClass(this.el.nativeElement, 'wild');
    
    this.renderer.setStyle(
      this.el.nativeElement,
      'border-left',
      '2px dashed olive'
    );

    this.renderer.removeStyle(this.el.nativeElement, 'border-left');

    this.renderer.setProperty(this.el.nativeElement, 'alt', 'Cute alligator');

    this.renderer.setProperty(this.el.nativeElement, 'value', 'Cute alligator');
  }

}