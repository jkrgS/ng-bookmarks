import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-bookmark-item',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'rotate(-180deg)',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('1s')]),
    ]),
  ],
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss'],
})
export class BookmarkItemComponent implements OnInit {
  step = 0;
  buttons = [
    { title: 'Delete', color: '', icon: 'restore_from_trash' },
    { title: 'Edit', color: '', icon: 'mode_edit' },
  ];

  // tslint:disable-next-line: typedef
  setStep(index: number) {
    this.step = index;
  }

  constructor() {}

  ngOnInit(): void {}
}
