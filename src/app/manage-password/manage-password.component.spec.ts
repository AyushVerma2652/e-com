import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePasswordComponent } from './manage-password.component';

// import { MailService } from '../mail.service';
// import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
// import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';



describe('ManagePasswordComponent', () => {
  let component: ManagePasswordComponent;
  let fixture: ComponentFixture<ManagePasswordComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports:[BrowserDynamicTestingModule],
      // providers: [MailService,HttpClient , HttpHandler, HttpClientModule],
      // declarations: [ ManagePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
