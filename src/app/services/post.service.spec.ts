import MockPosts from '../../mocks/mock-post.json';
import MockPostsOfUser from '../../mocks/mock-user-posts.json';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';


import { PostService } from './post.service';
import { RouterTestingModule } from '@angular/router/testing';

const serviceUrl = environment.serverUrl + 'posts';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(PostService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 100 post', () => {
    service.getAllPost().subscribe(posts => {
      expect(posts.length).toBe(100);
    });
    const req = httpTestingController.expectOne(serviceUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(MockPosts);
  });

  it('should get the data successfull', () => {
    service.getPostById(1).subscribe(post => {
      expect(post.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    });
    const req = httpTestingController.expectOne(serviceUrl + '/1');
    expect(req.request.method).toEqual('GET');
    req.flush(MockPosts[0]);
  });


  it('should have no post', () => {
    service.getPostById(-1).subscribe(post => {
      expect(post).toBe(null);
    });
    const req = httpTestingController.expectOne(serviceUrl + '/-1');
    expect(req.request.method).toEqual('GET');
    req.flush(null);
  });

  it('should have 10 post for userId 1', () => {
    service.getPostByUser(1).subscribe(posts => {
      expect(posts.length).toBe(10);
    });
    const req = httpTestingController.expectOne(serviceUrl + '?userId=1');
    expect(req.request.method).toEqual('GET');
    req.flush(MockPostsOfUser);
  });

});
