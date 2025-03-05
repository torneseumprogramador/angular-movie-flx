import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieModalComponent } from './create-movie-modal.component';

describe('CreateMovieModalComponent', () => {
  let component: CreateMovieModalComponent;
  let fixture: ComponentFixture<CreateMovieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMovieModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
