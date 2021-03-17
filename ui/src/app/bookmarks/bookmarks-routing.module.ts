import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';

const routes: Routes = [{ path: '', component: BookmarksListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarksRoutingModule {}
