import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoroccoComponent } from './morocco.component';

describe('MoroccoComponent', () => {
  let component: MoroccoComponent;
  let fixture: ComponentFixture<MoroccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoroccoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoroccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
