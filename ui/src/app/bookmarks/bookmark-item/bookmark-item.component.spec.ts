import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { BookmarkItemComponent } from './bookmark-item.component';

describe('BookmarkItemComponent', () => {
  let component: BookmarkItemComponent;
  let fixture: ComponentFixture<BookmarkItemComponent>;

  class StoreMock {
    dispatch = jasmine.createSpy();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmarkItemComponent],
      imports: [BrowserAnimationsModule],
      providers: [
        {
          provide: Store,
          useClass: StoreMock,
        },
        {
          provide: MatDialog,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
