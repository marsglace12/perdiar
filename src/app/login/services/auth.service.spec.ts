import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
// TODO: Faire les tu pour le service
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {
          provide: AngularFireAuth,
          useValue: {
            signInWithPopup: jest.fn(),
            signOut: jest.fn(),
            auth: {
              GoogleAuthProvider: jest.fn()
            }
          },
      },
      ]
    });
    service = TestBed.inject(AuthService);
  });
   it('has created successfully', () => {
     expect(service).toBeTruthy();
   })
});
