import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: Boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.temlateRef);
    }else{
      this.vcRef.clear();
    }
  }
  constructor(private temlateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

   }

}
