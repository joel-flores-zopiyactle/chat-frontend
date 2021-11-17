import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { NavContactComponent } from './components/nav-contact/nav-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatPageComponent } from './page/chat-page/chat-page.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { FormInfoComponent } from './components/form-info/form-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    ChatPageComponent,
    ChatListComponent,
    NavContactComponent,
    NavUserComponent,
    FormMessageComponent,
    ContactInfoComponent,
    FormInfoComponent,
    MessageComponent

  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
