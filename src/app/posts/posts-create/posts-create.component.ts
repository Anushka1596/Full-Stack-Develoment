import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Post } from '../post.model';
import {NgForm} from '@angular/forms';
import {PostService} from '../post.service';
import formatErrorMsg = jasmine.formatErrorMsg;

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  constructor(public  postService: PostService) { }
  enteredTitle = '';
  enteredContent = '';
  ngOnInit() {
  }
  savePost( form: NgForm) {
  if (form.invalid) {
  return;
  }
  this.postService.addPost(form.value.title , form.value.content);
  form.resetForm();
  }

}
