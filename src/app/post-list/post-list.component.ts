import { Component, OnInit } from '@angular/core';
import { PostDto } from '../model/post.dto';
import { UserDto } from '../model/user.dto';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  apiPosts: PostDto[];
  postsDisplayed: PostDto[];
  users: UserDto[];

  constructor(private postService: PostService,
              private userService: UserService) { }

  ngOnInit(): void {

    this.postService.getAllPost().subscribe(posts => {
      this.apiPosts = posts;
      this.postsDisplayed =  posts;
    });
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      localStorage.setItem('authors', JSON.stringify(users));
    });

  }

  selectUser(id: number) {
    console.log({id});
    this.postsDisplayed = (id === 0) ?
            this.apiPosts :
            this.apiPosts.filter(post => post.userId === id);

  }

}
