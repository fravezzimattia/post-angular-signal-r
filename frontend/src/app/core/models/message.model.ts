import { User } from './user.model';

export class Message {
	public text: string;
	public datetime: Date;
	public user: User;
	public self: boolean;
}