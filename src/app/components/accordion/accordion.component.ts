import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { Subject } from 'rxjs';
import { AccordionPanel } from './accordion-panel/accordion-panel.component';

export enum AccordionType {
  ACCORDION = 'accordion',
  EXPANSION = 'expansion',
}

@Component({
  selector: 'accordion',
  standalone: true,
  template: `<ng-content select="accordion-panel"></ng-content>`,
})
export class Accordion {
  @ContentChild(AccordionPanel) panel!: AccordionPanel;

  @ContentChildren(AccordionPanel) panels!: QueryList<AccordionPanel>;

  @Input() type: AccordionType = AccordionType.EXPANSION;

  accordionChanges$ = new Subject<void>();

  ngOnInit(): void {
    this.accordionChanges$.subscribe(() => {
      this.closeAll();
    });
  }

  ngAfterViewInit(): void {
    console.log(this.panels.toArray());
  }

  closeAll(): void {
    this.panels.toArray().forEach((pannel) => pannel.closePanel());
  }

  openAll(): void {
    this.panels.toArray().forEach((pannel) => pannel.openPanel());
  }
}
