import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  @Input('appClass') set backgroundColor(classObj: any) {
    for (const key in classObj) {
      // if (Object.prototype.hasOwnProperty.call(classObj, key)) {
      //   const element = classObj[key];

      // }

      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
