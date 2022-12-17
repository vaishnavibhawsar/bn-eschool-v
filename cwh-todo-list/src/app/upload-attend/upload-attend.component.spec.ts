import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAttendComponent } from './upload-attend.component';

describe('UploadAttendComponent', () => {
  let component: UploadAttendComponent;
  let fixture: ComponentFixture<UploadAttendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAttendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAttendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
