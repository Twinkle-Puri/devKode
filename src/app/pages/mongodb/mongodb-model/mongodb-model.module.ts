import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MongodbModelPage } from './mongodb-model.page';

const routes: Routes = [
  {
    path: '',
    component: MongodbModelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MongodbModelPage]
})
export class MongodbModelPageModule {}
