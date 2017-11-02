import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePreviewListComponent } from './movie-preview-list.component';

describe('MoviePreviewListComponent', () => {
  let component: MoviePreviewListComponent;
  let fixture: ComponentFixture<MoviePreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
