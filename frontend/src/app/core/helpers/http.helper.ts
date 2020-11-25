import { HttpHeaders } from '@angular/common/http';

export const httpOptionsJson = (): { headers: HttpHeaders } => {
	return {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		})
	};
};