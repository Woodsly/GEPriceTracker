import { InjectionToken } from '@angular/core';
import { environment } from './environments/environment';


export const BASE_URL = new InjectionToken<string>('BASE_URL');

export const baseApiUrl = {
  provide: BASE_URL,
  useValue: environment.baseUrl
};
