import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { BookmarksListComponent } from './bookmarks-list.component';

describe('BookmarksListComponent', () => {
  let component: BookmarksListComponent;
  let fixture: ComponentFixture<BookmarksListComponent>;

  class StoreMock {
    select = jasmine.createSpy().and.returnValue(of([]));
    dispatch = jasmine.createSpy();
    pipe = jasmine.createSpy().and.returnValue(of('success'));
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmarksListComponent],
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
    fixture = TestBed.createComponent(BookmarksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
