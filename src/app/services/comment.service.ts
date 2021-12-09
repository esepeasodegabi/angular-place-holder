import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentDto } from '../model/comment.dto';

const serviceUrl = environment.serverUrl + 'comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(public http: HttpClient) { }

  public getCommentsOfPost(postId: number): Observable<CommentDto[]> {
    return this.http.get<CommentDto[]>(serviceUrl + '?postId=' + postId) ;
  }

}
