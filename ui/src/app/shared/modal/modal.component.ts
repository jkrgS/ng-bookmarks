import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bookmark } from 'src/app/bookmarks/models/bookmark.model';
import { groupList } from 'src/app/helpers/group';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  form!: FormGroup;
  groups = [...groupList];

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Bookmark
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    const name = (this.data && this.data.name) || '';
    const url = (this.data && this.data.url) || '';
    const group =
      (this.data && this.data.group) ||
      this.groups.find((val) => val.default)?.name;

    this.form = this.fb.group({
      name: [name, Validators.required],
      url: [url],
      group: [group],
    });
  }

  createBookmark(): void {
    this.dialogRef.close(this.form.value);
  }
}
