import { HttpHeaders, HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { httpOptionsJson } from '../helpers/http.helper';

export class HttpService {
	public httpOptions = httpOptionsJson();

	constructor(
		public httpClient: HttpClient,
		public baseUrl: string
	) {
		this.baseUrl = baseUrl;
	}

	public httpGet(url: string, headers?: HttpHeaders): Observable<any> {
		return this.httpClient
			.get(url, this.getAllOptions(headers))
			.pipe(catchError((err) => this.throwError(err)));
	}

	public httpPost(url: string, body: any, headers?: HttpHeaders): Observable<any> {
		return this.httpClient
			.post(url, body, this.getAllOptions(headers))
			.pipe(catchError((err) => this.throwError(err)));
	}

	public httpPut(url: string, body: any, headers?: HttpHeaders): Observable<any> {
		return this.httpClient
			.put(url, body, this.getAllOptions(headers))
			.pipe(catchError((err) => this.throwError(err)));
	}

	public httpDelete(url: string, id: number, headers?: HttpHeaders) {
		return this.httpClient
			.delete(url + '/' + id, this.getAllOptions(headers))
			.pipe(catchError((err) => this.throwError(err)));
	}

	private getAllOptions(headers: HttpHeaders) {
		if (!!headers && !!headers.keys()) {
			headers.keys().forEach((element) => {
				this.httpOptions.headers.append(element, headers.get(element));
			});
		}
		return this.httpOptions;
	}

	public throwError(err: any) {
		console.log(err);
		return throwError(err);
	}
}
