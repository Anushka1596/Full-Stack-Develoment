import {Post} from './post.model'
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  private post: Post[] = [];
  private postsUpdate= new Subject();

  getPosts(){
    return [...this.post];
  }

  getPostUpdateListner(){
 return this.postsUpdate.asObservable();
  }
  addPost(title:string, content:string){
    const post: Post ={ title : title , content : content};
    this.post.push(post);
    this.postsUpdate.next([...this.post])
  }
}
