import { Component } from '@angular/core';
import { AccordionType } from './components/accordion/accordion.component';
import {
  Accordion,
  AccordionPanel,
  AccordionPanelHeader,
  AccordionPanelContent,
} from './components';

@Component({
  standalone: true,
  imports: [
    Accordion,
    AccordionPanel,
    AccordionPanelHeader,
    AccordionPanelContent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'accordion';

  accordionType = AccordionType;
}
