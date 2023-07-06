import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingDropdownComponent } from './cascading-dropdown.component';

describe('CascadingDropdownComponent', () => {
  let component: CascadingDropdownComponent;
  let fixture: ComponentFixture<CascadingDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CascadingDropdownComponent]
    });
    fixture = TestBed.createComponent(CascadingDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
