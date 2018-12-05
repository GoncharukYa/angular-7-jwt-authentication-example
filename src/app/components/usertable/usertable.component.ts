import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../_models/user.model';
import { map } from 'rxjs/operators';

@Component({
    selector: 'usertable',
    templateUrl: './usertable.component.html',
    styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
    dataSource = new UserDataSource(this.userService);
    displayedColumns = ['name', 'email', 'phone', 'role', 'created_at', 'updated_at'];
    constructor(private userService: UserService) {} 

    ngOnInit() {
        
    }
}

export class UserDataSource extends DataSource<any> {
    constructor(private userService: UserService) {
        super();
    }
    connect(): Observable<User[]> {
        return this.userService.getAll().pipe(map(responce => responce["data"]));
    }
    disconnect() {}

}