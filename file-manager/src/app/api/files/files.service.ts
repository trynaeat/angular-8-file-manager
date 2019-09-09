import { Injectable } from '@angular/core';
import { ApiConfig } from '../api-configuration';
import { HttpClient } from '@angular/common/http';

const endpoint = 'files';

export interface FileListParams {
  page: number;
  size: number;
}

export interface FileListResponse {
  data: {
    filename: string;
    description: string;
  }[];
  totalCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private config: ApiConfig,
    private http: HttpClient,
  ) { }

  public getFileList(params: FileListParams) {
    const paramsStringified = {
      page: params.page.toString(),
      size: params.size.toString(),
    };

    return this.http.get<FileListResponse>(`${this.config.baseUrl}/${endpoint}`, { params: paramsStringified });
  }
}
