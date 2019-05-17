import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'learn',
        children: [
          {
            path: '',
            loadChildren: '../learn/learn.module#LearnPageModule'
          }
        ]
      },
      {
        path: 'code',
        children: [
          {
            path: '',
            loadChildren: '../code/code.module#CodePageModule'
          }
        ]
      },
      {
        path: 'play',
        children: [
          {
            path: '',
            loadChildren: '../play/play.module#PlayPageModule'
          }
        ]
      },
      {
        path: 'discussion',
        children: [
          {
            path: '',
            loadChildren: '../discussion/discussion.module#DiscussionPageModule'
          }
        ]
      },
      {
        path: 'userhome',
        children: [
          {
            path: '',
            loadChildren: '../userhome/userhome.module#UserhomePageModule'
          }
        ]
      },
         {
        path: '',
        redirectTo: 'learn/learn',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'learn/learn',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenuPageRoutingModule { }
