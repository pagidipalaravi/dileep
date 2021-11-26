import { Component, OnInit } from '@angular/core';
import { postService } from '../service/post.service';
@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
 
  post: any;
  message: any;
  employees: any;
  data: any;
  result:any;
  constructor(private postService: postService) { }

  ngOnInit(): void {
    this.postService.getEmployees().subscribe((data): any => {
      if (data.status === 200) {
        this.employees = data;
        console.log(this.employees);
      }
      else {
        console.log(data);
      }
    });
  }
}
