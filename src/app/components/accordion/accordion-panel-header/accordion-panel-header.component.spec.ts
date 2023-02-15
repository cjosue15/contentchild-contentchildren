import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPanelHeaderComponent } from './accordion-panel-header.component';

describe('AccordionPanelHeaderComponent', () => {
  let component: AccordionPanelHeaderComponent;
  let fixture: ComponentFixture<AccordionPanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AccordionPanelHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
