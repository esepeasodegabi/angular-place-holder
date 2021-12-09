import MockComments from '../../mocks/mock-comment.json';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';
import { environment } from 'src/environments/environment';

const serviceUrl = environment.serverUrl + 'comments';

describe('CommentService', () => {
  let service: CommentService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]});
    service = TestBed.inject(CommentService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 5 comments', () => {
    service.getCommentsOfPost(1).subscribe(posts => {
      expect(posts.length).toBe(5);
    });
    const req = httpTestingController.expectOne(serviceUrl + '?postId=1');
    expect(req.request.method).toEqual('GET');
    req.flush(MockComments.filter(comment => comment.postId === 1 ));
  });
});
