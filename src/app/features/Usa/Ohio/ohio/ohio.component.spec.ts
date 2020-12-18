import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhioComponent } from './ohio.component';

describe('OhioComponent', () => {
  let component: OhioComponent;
  let fixture: ComponentFixture<OhioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
