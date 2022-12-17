import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SLoginformComponent } from './s-loginform.component';

describe('SLoginformComponent', () => {
  let component: SLoginformComponent;
  let fixture: ComponentFixture<SLoginformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SLoginformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
