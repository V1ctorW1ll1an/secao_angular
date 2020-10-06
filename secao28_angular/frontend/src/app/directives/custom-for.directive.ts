import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appCustomFor]',
})
export class CustomForDirective implements OnInit {
  @Input('appCustomForEm') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (const number in this.numbers) {
      if (Object.prototype.hasOwnProperty.call(this.numbers, number)) {
        this.container.createEmbeddedView(this.template, { $implicit: number });
      }
    }
  }
}
