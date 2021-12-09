import MockUser from '../../mocks/mock-users.json';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { UserService } from './user.service';

const serviceUrl = environment.serverUrl + 'users';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [RouterTestingModule, HttpClientTestingModule]});
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 10 users', () => {
    service.getAllUsers().subscribe(users => {
      expect(users.length).toBe(10);
    });
    const req = httpTestingController.expectOne(serviceUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(MockUser);
  });

  it('should match first user', () => {
    service.getUserById(1).subscribe(user => {
      expect(user).toEqual(JSON.parse(JSON.stringify(MockUser))[0]);
    });
    const req = httpTestingController.expectOne(serviceUrl + '/1');
    expect(req.request.method).toEqual('GET');
    req.flush(JSON.parse(JSON.stringify(MockUser))[0]);
  });
});
