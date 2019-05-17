import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BreadcrumbsPage } from './breadcrumbs.page';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BreadcrumbsPage]
})
export class BreadcrumbsPageModule {}
