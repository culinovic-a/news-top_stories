import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './home/feed/feed.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
