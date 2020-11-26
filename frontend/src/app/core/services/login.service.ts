import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class LoginService extends HttpService {
	constructor(
		public httpClient: HttpClient
	) {
		super(httpClient, 'users');
	}

	public getUser(): Observable<User> {
		const url = `${this.baseUrl}/login`;
		return this.httpGet(url)
	}
}
