import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAssigComponent } from './s-assig.component';

describe('SAssigComponent', () => {
  let component: SAssigComponent;
  let fixture: ComponentFixture<SAssigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAssigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SAssigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
