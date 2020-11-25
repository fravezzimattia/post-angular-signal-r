import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';



@NgModule({
	declarations: [
		MessageComponent,
		MessageListComponent,
		ChatHeaderComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		MessageComponent,
		MessageListComponent,
		ChatHeaderComponent
	],
})
export class SharedModule { }
