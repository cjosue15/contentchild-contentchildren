import { Component } from '@angular/core';

@Component({
  selector: 'accordion-panel-header',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class AccordionPanelHeader {
  constructor() {}
}
