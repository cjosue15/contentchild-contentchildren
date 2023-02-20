import { Component } from '@angular/core';
import { AccordionType } from './components/accordion/accordion.component';
import {
  AccordionComponent,
  AccordionPanelComponent,
  AccordionPanelHeaderComponent,
  AccordionPanelContentComponent,
} from './components';

@Component({
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionPanelComponent,
    AccordionPanelHeaderComponent,
    AccordionPanelContentComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'accordion';

  accordionType = AccordionType;
}
