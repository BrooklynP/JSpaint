import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourManagerComponent } from './colour-manager.component';

describe('ColourManagerComponent', () => {
  let component: ColourManagerComponent;
  let fixture: ComponentFixture<ColourManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColourManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
