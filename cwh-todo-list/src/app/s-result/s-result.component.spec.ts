import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SResultComponent } from './s-result.component';

describe('SResultComponent', () => {
  let component: SResultComponent;
  let fixture: ComponentFixture<SResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
