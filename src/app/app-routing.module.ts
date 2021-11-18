import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './modules/auth/page/login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent,
    //redirectTo: "/login",  pathMatch: 'full'

  },
  {
    path: "login",
    loadChildren: ()=> import('./modules/auth/auth.module').then( e => e.AuthModule)
  },
  {
    path: "chat/:id",
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/chat/chat.module').then( e => e.ChatModule)
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
