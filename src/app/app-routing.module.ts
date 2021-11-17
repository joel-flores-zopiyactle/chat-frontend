import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: ()=> import('./modules/auth/auth.module').then( e => e.AuthModule)
  },
  {
    path: "chat/:id",
    loadChildren: () => import('./modules/chat/chat.module').then( e => e.ChatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
