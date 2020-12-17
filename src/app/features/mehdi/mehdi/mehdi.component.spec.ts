import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehdiComponent } from './mehdi.component';

describe('MehdiComponent', () => {
  let component: MehdiComponent;
  let fixture: ComponentFixture<MehdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MehdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MehdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
