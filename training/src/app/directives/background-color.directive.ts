import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {
  private defaultStyle = 'transparent';

  @HostListener('mouseenter')
  public addStyle() {
    this.defaultStyle = 'purple';
  }

  @HostListener('mouseleave')
  public removeStyle() {
    this.defaultStyle = 'transparent';
  }

  @HostBinding('style.backgroundColor')
  public get showStyle() {
    return this.defaultStyle;
  }
}
