import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAssigComponent } from './upload-assig.component';

describe('UploadAssigComponent', () => {
  let component: UploadAssigComponent;
  let fixture: ComponentFixture<UploadAssigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAssigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAssigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
