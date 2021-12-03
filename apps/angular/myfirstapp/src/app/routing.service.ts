import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  static isloggedin: boolean;

  constructor(private route: ActivatedRoute) { }
  get isLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem('user_Id') as string);
    console.log(user);
    return user !== null? true:false
  }
}
