import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls:["home.component.css"]
})

export class HomeComponent implements OnInit {

    usersModel:boolean;
    controlsModel:boolean;
    actionsModel:boolean;
    offersModel:boolean;
    
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.usersModel = true;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    activeTab(n:number){
       
        if(n == 1){
            this.usersModel = true;
            this.controlsModel = false;
            this.actionsModel = false;
            this.offersModel = false;
    
        }else if(n == 2){
            this.usersModel = false;
            this.controlsModel = true;
            this.actionsModel = false;
            this.offersModel = false;
        }else if(n == 3){
            this.usersModel = false;
            this.controlsModel = false;
            this.actionsModel = true;
            this.offersModel = false;
        }else if(n == 4){
            this.usersModel = false;
            this.controlsModel = false;
            this.actionsModel = false;
            this.offersModel = true; 
        } 
       
    }

}