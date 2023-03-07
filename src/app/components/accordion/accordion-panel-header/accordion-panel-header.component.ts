import { Component } from '@angular/core';

@Component({
  selector: 'accordion-panel-header',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
        margin: 1rem;
        border: 2px solid green;
      }
    `,
  ],
})
export class AccordionPanelHeader {
  constructor() {}
}
