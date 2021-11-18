import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class Scroll {
    constructor(el: ElementRef) {
       el.nativeElement.scrollTop = el.nativeElement.scrollHeigh;
    }
}
