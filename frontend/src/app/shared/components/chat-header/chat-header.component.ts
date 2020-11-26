import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'chat-header',
	templateUrl: './chat-header.component.html',
	styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent {
	@Input()
	public imgUrl: string;

	@Input()
	public title: string;

	@Output()
	public toggleChat = new EventEmitter();

	public onToggleChat() {
		this.toggleChat.emit()
	}
}
