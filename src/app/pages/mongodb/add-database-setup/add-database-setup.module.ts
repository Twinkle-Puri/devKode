import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddDatabaseSetupPage } from './add-database-setup.page';

const routes: Routes = [
  {
    path: '',
    component: AddDatabaseSetupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddDatabaseSetupPage]
})
export class AddDatabaseSetupPageModule {}
