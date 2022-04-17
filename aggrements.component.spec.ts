import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggrementsComponent } from './aggrements.component';

describe('AggrementsComponent', () => {
  let component: AggrementsComponent;
  let fixture: ComponentFixture<AggrementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggrementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggrementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
