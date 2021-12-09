import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDetailDto } from '../model/post-detail.dto';
import { PostDto } from '../model/post.dto';
import { CommentService } from '../services/comment.service';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postDetail = {} as PostDetailDto;
  viewComments = true;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private userService: UserService,
              private commentService: CommentService) {
                this.postDetail.post = {} as PostDto;
                this.postDetail.post.id = +this.route.snapshot.paramMap.get('id');
              }

  ngOnInit(): void {
    this.postService.getPostById(this.postDetail.post.id).subscribe(post => {
      this.postDetail.post = post;
      this.userService.getUserById(post.userId).subscribe(user => {
        this.postDetail.author = user;
      });
    });
    this.commentService.getCommentsOfPost(this.postDetail.post.id).subscribe(commets => {
      this.postDetail.comments = commets;
    });
  }

  viewOrHideComments(): void {
    this.viewComments = !this.viewComments;
  }

}
