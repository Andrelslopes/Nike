import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Folder2PageRoutingModule } from './folder2-routing.module';

import { Folder2Page } from './folder2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Folder2PageRoutingModule
  ],
  declarations: [Folder2Page]
})
export class Folder2PageModule {}
