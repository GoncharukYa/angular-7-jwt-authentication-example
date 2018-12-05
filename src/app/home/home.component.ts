import { Component } from '@angular/core';
import { first, map } from 'rxjs/operators';

import { User } from '@/_models/user.model';
import { UserService, } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(responce => {
            this.users = responce["data"];
        });
    }
}