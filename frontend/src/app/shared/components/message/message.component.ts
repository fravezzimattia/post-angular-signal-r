import { Component, Input } from '@angular/core';
import { Message } from 'src/app/core/models/message.model';

@Component({
	selector: 'message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent {
	@Input()
	public message: Message;
}
