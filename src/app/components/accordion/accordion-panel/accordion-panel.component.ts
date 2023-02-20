import { NgIf } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { Accordion, AccordionType } from '../accordion.component';

let uniqueId: number = 0;

@Component({
  selector: 'accordion-panel',
  standalone: true,
  imports: [NgIf],
  template: `<div class="accordion-panel__header" (click)="togglePanel()">
      <ng-content select="accordion-panel-header"></ng-content>
    </div>
    <div class="accordion-panel__content" *ngIf="isOpen">
      <ng-content select="accordion-panel-content"></ng-content>
    </div>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AccordionPanel {
  @HostBinding('class.accordion-panel') hostClass = true;

  @HostBinding('id') id = 0;

  isOpen = false;

  constructor(private accordion: Accordion) {
    uniqueId++;

    this.id = uniqueId;
  }

  togglePanel(): void {
    if (this.accordion.type === AccordionType.DEFAULT) {
      this.accordion.accordionChanges$.next();
    }
    this.isOpen = !this.isOpen;
  }

  closePanel(): void {
    this.isOpen = false;
  }

  openPanel(): void {
    this.isOpen = true;
  }
}
