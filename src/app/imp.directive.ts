import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImp]'
})
export class ImpDirective {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.color="white";
    elementRef.nativeElement.style.backgroundColor="white";
    elementRef.nativeElement.style.fontWeight="900";


  }

}
