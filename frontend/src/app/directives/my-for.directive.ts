import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myFor]',
})
export class MyForDirective implements OnInit {
  @Input('myForEm') objects: Object[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for(let object of this.objects){
      this.container.createEmbeddedView(this.template, {$implicit: object});
    }
  }
}
