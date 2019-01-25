import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'app';
  public posts: Post[];
  public activePost: Post;
  constructor(public postService: PostService){
    let post1 = new Post('Why are puppies so cute?');
    let post2 = new Post('SERIOUSLY WHY ARE PUPPIES SO CUTE???');
    let post3 = new Post('Cute puppies: an analysis');

    post2.body = "I CAN'T HANDLE IT WTF";
    post3.body = "They're cute. Deal with it.";

    this.posts = [post1, post2, post3];
  }

  setFocus(post){
    this.activePost = post;
  }

  savePost(post){
    console.log(post.title);
    console.log(post.body);
    this.posts.push(post);
    this.activePost = post;
  }

  createPost(){
    this.activePost = null;
  }
}
