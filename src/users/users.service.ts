import { Injectable } from '@nestjs/common';

export type User = {
	id: number;
	name: string;
	username: string;
	password: string;
};

@Injectable()
export class UsersService {
	private readonly users: User[] = [
		{
			id: 1,
			name: 'Vinh Nguyen',
			username: 'vinh',
			password: '1234'
		},
		{
			id: 2,
			name: 'Jane Doe',
			username: 'jane',
			password: '5678'
		}
	];

	async findOne(username: string): Promise<User | undefined> {
		return this.users.find((user) => user.username === username);
	}
}
