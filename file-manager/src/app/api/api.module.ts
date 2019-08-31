import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoginService } from './login/login.service';
import { ApiConfigInterface, ApiConfig } from './api-configuration';

@NgModule()
export class ApiModule {
  static forRoot(config: ApiConfigInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        LoginService,
        {
          provide: ApiConfig,
          useValue: config,
        },
      ],
    };
  }
}
