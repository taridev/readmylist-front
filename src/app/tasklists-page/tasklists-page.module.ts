import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TasklistsPagePage } from './tasklists-page.page';

const routes: Routes = [
  {
    path: '',
    component: TasklistsPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TasklistsPagePage]
})
export class TasklistsPagePageModule {}
