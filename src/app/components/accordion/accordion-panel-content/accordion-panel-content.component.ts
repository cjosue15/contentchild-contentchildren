import { Component } from '@angular/core';

@Component({
  selector: 'accordion-panel-content',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class AccordionPanelContent {}
