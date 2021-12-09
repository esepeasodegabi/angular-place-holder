import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture,  TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterTestingModule } from '@angular/router/testing';


import { PostModifyOrUpdateComponent } from './post-modify-or-update.component';

describe('PostModifyOrUpdateComponent', () => {
  let component: PostModifyOrUpdateComponent;
  let fixture: ComponentFixture<PostModifyOrUpdateComponent>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostModifyOrUpdateComponent ],
      imports: [ RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModifyOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('invalid form', () => {
    const spy = spyOn(component, 'showSnack').withArgs('Hay errores en el formulario').and.callThrough();
    component.submit();
    expect(spy).toHaveBeenCalled();
  });


});
