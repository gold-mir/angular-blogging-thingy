import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() sendPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  savePost(title, body){
    let post :Post = new Post(title);
    post.body = body;
    this.sendPost.emit(post);
  }

}
