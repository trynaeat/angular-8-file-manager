import { NgModule, ModuleWithProviders } from '@angular/core';
import { FilesService } from './files/files.service';
import { LoginService } from './login/login.service';
import { ApiConfigInterface, ApiConfig } from './api-configuration';

@NgModule()
export class ApiModule {
  static forRoot(config: ApiConfigInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        FilesService,
        LoginService,
        {
          provide: ApiConfig,
          useValue: config,
        },
      ],
    };
  }
}
