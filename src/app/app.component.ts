import { UsersService } from './user/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor( private userService : UsersService){}
  ngOnInit(){
    this.userService.userActivated.subscribe(
      (userId : number) => {
        if( userId == 1 )
          {
            this.user1Activated = true;
          }
          else{
            this.user2Activated = true;
          }
      }
    );
  }
}
