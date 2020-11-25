import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Message } from './core/models/message.model';
import { User } from './core/models/user.model';
import { ChatService } from './core/services/chat.service';
import { LoginService } from './core/services/login.service';
import { SignalRService } from './core/services/signal-r.service';

// https://codepen.io/shivapandey/pen/dWdRYM
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	protected unsubscribeAll: Subject<any> = new Subject();
	public message = "";
	public showChat = false;
	public user: User;
	public messageList: Message[] = [];

	constructor(
		public loginService: LoginService,
		public chatService: ChatService,
		public signalRService: SignalRService
	) { }

	ngOnInit(): void {
		this.unsubscribeAll = new Subject();

		this.loginService.getUser()
			.pipe(takeUntil(this.unsubscribeAll))
			.subscribe(user => this.user = user);

		this.signalRService.startConnection();

		this.signalRService.getHubConnection()
			.on('message', (message: Message) => {
				message.self = this.user.id === message.user.id;
				this.messageList.push(message);
			})
	}

	public onSubmit() {
		if (this.message.trim() == '') {
			return false;
		}

		this.chatService.sendMessage(this.generateMessage(this.message))
			.pipe(take(1))
			.subscribe(res => console.log(res));
	}

	public generateMessage(message: string): Message {
		let item = new Message();
		item.text = message;
		item.datetime = new Date();
		item.user = this.user;
		return item;
	}

	public toggleChat() {
		this.showChat = !this.showChat;
	}

	ngOnDestroy(): void {
		this.unsubscribeAll.next();
		this.unsubscribeAll.complete();
	}
}
