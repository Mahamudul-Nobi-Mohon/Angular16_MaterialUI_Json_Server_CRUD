import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCreateComponent } from './trainee-create.component';

describe('TraineeCreateComponent', () => {
  let component: TraineeCreateComponent;
  let fixture: ComponentFixture<TraineeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineeCreateComponent]
    });
    fixture = TestBed.createComponent(TraineeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
