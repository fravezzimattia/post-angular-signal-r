import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';



@NgModule({
  declarations: [MessageComponent, MessageListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
