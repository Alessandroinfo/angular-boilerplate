import {Credentials} from '@app/auth/services/credentials.service';

export class MockCredentialsService {
  credentials: Credentials | null = {
    username: 'test',
    token: '123',
  };

  remember = false;

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  setCredentials(credentials?: Credentials, remember?: boolean) {
    this.credentials = credentials || null;
    this.remember = remember || false;
  }
}
