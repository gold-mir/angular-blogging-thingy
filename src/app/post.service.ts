import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable()
export class PostService {
  public posts :Post[];
  constructor() {

    let post1 = new Post('Why are puppies so cute?');
    let post2 = new Post('SERIOUSLY WHY ARE PUPPIES SO CUTE???');
    let post3 = new Post('Cute puppies: an analysis');

    post1.body = "uwu~";
    post2.body = "I CAN'T HANDLE IT WTF";
    post3.body = "They're cute. Deal with it.";

    this.posts.push(post1, post2, post3);
    console.log(this.posts);
   }

   getPosts(){
    return this.posts;
   }

   addPost(post){
     this.posts.push(post);
   }
}
