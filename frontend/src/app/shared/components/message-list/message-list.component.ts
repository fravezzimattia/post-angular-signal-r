import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/core/models/message.model';

@Component({
	selector: 'message-list',
	templateUrl: './message-list.component.html',
	styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
	@Input()
	public list: Message[]
}
