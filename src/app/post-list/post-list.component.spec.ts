import MockPosts from '../../mocks/mock-post.json';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { PostService } from '../services/post.service';

import { PostListComponent } from './post-list.component';
import { Injectable } from '@angular/core';
import { PostDto } from '../model/post.dto';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});


