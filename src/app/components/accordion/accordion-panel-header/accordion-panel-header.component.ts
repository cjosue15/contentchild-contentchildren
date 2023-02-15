import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-panel-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-panel-header.component.html',
  styleUrls: ['./accordion-panel-header.component.scss'],
})
export class AccordionPanelHeaderComponent {
  constructor() {}
}
