import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastValuesElementsComponent } from './last-values-elements.component';

describe('LastValuesElementsComponent', () => {
  let component: LastValuesElementsComponent;
  let fixture: ComponentFixture<LastValuesElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastValuesElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastValuesElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
