import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  posts: Array<Post> = []; 
  
  constructor(private dataService: DataService){
    this.dataService.getData().subscribe( data => {
      this.posts = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }


}
