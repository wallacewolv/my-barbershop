import { ElementRef } from '@angular/core';
import { AutoFocusDirective } from './auto-focus.directive';

describe('AutoFocusDirective', () => {
  it('should create an instance', () => {
    const elementRef: ElementRef = { nativeElement: null };
    const directive = new AutoFocusDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
