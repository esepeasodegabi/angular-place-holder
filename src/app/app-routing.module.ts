import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostModifyOrUpdateComponent } from './post-modify-or-update/post-modify-or-update.component';


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'new', component: PostModifyOrUpdateComponent },
  { path: 'edit/:id', component: PostModifyOrUpdateComponent },
  { path: 'detail/:id', loadChildren: () => import('./post-detail/post-detail.module').then(m => m.PostDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
