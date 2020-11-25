import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class ChatService extends HttpService {

	constructor(
		public httpClient: HttpClient
	) {
		super(httpClient, 'chats');
	}

	public sendMessage(message: Message) {
		const url = `${this.baseUrl}/messages`;
		return this.httpPost(url, message)
	}
}
