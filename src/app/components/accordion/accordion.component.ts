import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';

export enum AccordionType {
  DEFAULT = 'default',
  EXPANSION = 'expansion',
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @ContentChildren(AccordionPanelComponent)
  panels!: QueryList<AccordionPanelComponent>;

  @Input() type: AccordionType = AccordionType.DEFAULT;

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
