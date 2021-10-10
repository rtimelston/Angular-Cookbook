import { HighlightDirective } from './highlight.directive';
import { ElementRef } from "@angular/core";

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = new ElementRef<any>('<span></span>');
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });
});
