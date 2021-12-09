import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PostDto } from '../model/post.dto';
import { UserDto } from '../model/user.dto';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-modify-or-update',
  templateUrl: './post-modify-or-update.component.html',
  styleUrls: ['./post-modify-or-update.component.scss']
})
export class PostModifyOrUpdateComponent implements OnInit {

  postForm: FormGroup;
  users: UserDto[];
  selectedUser: string;
  editPost = 0; // 0.- Componente en modo creación, > 0 Componente en modo edición

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {
                this.editPost = +this.route.snapshot.paramMap.get('id');
                console.log(this.editPost);
              }

  ngOnInit(): void {
    this.getAllUsers();
    this.postForm = this.formBuilder.group({
      author: [null, Validators.required],
      title: [null, Validators.required],
      post: [null, Validators.required]
    });
    if (this.isEditMode()) {
      this.getDataToEdit();
    }
  }

  submit() {
    if (this.postForm.valid) {
      const post: PostDto = {
        userId: this.postForm.get('author').value,
        title: this.postForm.get('title').value,
        body: this.postForm.get('post').value,
        id: null
      };
      if (this.isEditMode()){
        this.editPostCall(post);
      } else {
        this.createPostCall(post);
      }
    } else {
      this.showSnack('Hay errores en el formulario');
    }
  }

  public showSnack(msg: string) {
    this.snackBar.open(msg, 'ok');
  }

  private getDataToEdit() {
    this.postService.getPostById(this.editPost).subscribe(post => {
      this.postForm.get('author').setValue(post.userId);
      this.postForm.get('title').setValue(post.title);
      this.postForm.get('post').setValue(post.body);
    });
  }


  private getAllUsers() {
    if (!localStorage.getItem('authors')) {
      this.userService.getAllUsers().subscribe(users => {
        this.users = users;
        localStorage.setItem('authors', JSON.stringify(users));
      });
    } else {
      this.users = JSON.parse(localStorage.getItem('authors'));
      console.log('testest: ' + this.users.length);
    }
  }

  private createPostCall(post: PostDto) {
    this.postService.createPost(post).subscribe(result => {
      this.showSnack('Post creado');
    },
      error => {
        this.showSnack('Post NO creado');
      });
  }

  private editPostCall(post: PostDto) {
    post.id = this.editPost;
    this.postService.editPost(post).subscribe(result => {
      this.showSnack('Post editado');
    },
      error => {
        this.showSnack('Post NO editado');
      });
  }

  private isEditMode(): boolean  {
    return (this.editPost > 0);
  }


}
