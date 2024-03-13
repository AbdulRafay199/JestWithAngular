import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new object when form is submitted', () => {
    const datalength = component.data.length
    const form = {name:"hello", id:"2acak"} // form is filled
    component.submitForm(form);  //submit function is called
    expect(component.data).toHaveLength(datalength+1); //expected is length of data increases by 1 that means object added
  });

  it('should not add new object if form is empty', () => {
    const datalength = component.data.length
    const form = {name:"", id:""} // form is empty
    component.submitForm(form); //submit function is called
    expect(component.data).toHaveLength(datalength); //expected is length of data do not increase that means object not added
  });

  it('should not add new object if form is partially empty', () => {
    const datalength = component.data.length
    const form = {name:"", id:"akjdbcak"} // form is empty
    component.submitForm(form); //submit function is called
    expect(component.data).toHaveLength(datalength); //expected is length of data do not increase that means object not added
  });
});
