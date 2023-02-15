import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Output,
  Host,
} from '@angular/core';
import { AccordionComponent, AccordionType } from '../accordion.component';

let uniqueId: number = 0;

@Component({
  selector: 'app-accordion-panel',
  standalone: true,
  imports: [NgIf],
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss'],
})
export class AccordionPanelComponent {
  @HostBinding('class.accordion-panel') hostClass = true;

  @HostBinding('id') id = 0;

  isOpen = false;

  constructor(private accordion: AccordionComponent) {
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
