import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
	providedIn: 'root'
})
export class SignalRService {
	private baseUrl: string = "http://localhost:5000/api/ws";
	private hubConnection: signalR.HubConnection

	public startConnection() {
		this.hubConnection = new signalR.HubConnectionBuilder()
			.withUrl(this.baseUrl)
			.build();

		this.hubConnection
			.start()
			.then(() => console.log('Connection started'))
			.catch(err => console.log('Error while starting connection: ' + err))

		this.hubConnection
			.onclose((error: any) => console.log("Connection losted"));
	}

	public getHubConnection() {
		return this.hubConnection;
	}
}