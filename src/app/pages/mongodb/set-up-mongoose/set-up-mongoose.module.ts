import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetUpMongoosePage } from './set-up-mongoose.page';

const routes: Routes = [
  {
    path: '',
    component: SetUpMongoosePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetUpMongoosePage]
})
export class SetUpMongoosePageModule {}
