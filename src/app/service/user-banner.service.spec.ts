import { TestBed } from '@angular/core/testing';

import { UserBannerService } from './user-banner.service';

describe('UserBannerService', () => {
  let service: UserBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
