import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostDto } from '../model/post.dto';

const serviceUrl = environment.serverUrl + 'posts';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }

  public getAllPost(): Observable<PostDto[]> {
    return this.http.get<PostDto[]>(serviceUrl) ;
  }

  public getPostByUser(userId: number): Observable<PostDto[]> {
    return this.http.get<PostDto[]>(serviceUrl + '?userId=' + userId) ;
  }

  public getPostById(id: number): Observable<PostDto> {
    return this.http.get<PostDto>(serviceUrl + '/' + id) ;
  }

  public createPost(post: PostDto): Observable<PostDto> {
    return this.http.post<PostDto>(serviceUrl, post) ;
  }

  public editPost(post: PostDto): Observable<PostDto> {
    return this.http.put<PostDto>(serviceUrl + '/' + post.id, post) ;
  }

}
