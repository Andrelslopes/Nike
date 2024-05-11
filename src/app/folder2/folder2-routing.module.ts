import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Folder2Page } from './folder2.page';

const routes: Routes = [
  {
    path: '',
    component: Folder2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Folder2PageRoutingModule {}
