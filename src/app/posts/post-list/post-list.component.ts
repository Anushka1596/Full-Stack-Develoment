import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import { Posts } from '../post.model'
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
  posts: Posts[] = [];
  private postSub: Subscription;


  constructor(public postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postService.getPostUpdateListner().subscribe((post:Posts[]) => {
      this.posts = post;
    });
  }
  ngOnDestroy() {
      this.postSub.unsubscribe();
  }

}
