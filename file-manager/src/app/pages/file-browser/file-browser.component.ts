import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileListResponse, FilesService } from '@api';
import { ToastService } from '@components';
import { Observable, Subject, of } from 'rxjs';
import { catchError, takeUntil, switchMap } from 'rxjs/operators';

interface RefreshOptions {
  page: number;
}

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit, OnDestroy {

  public data: FileListResponse['data'];
  public totalItems = 0;
  private refresh$ = new Subject<RefreshOptions>();
  private destroy$ = new Subject();
  constructor(
    private filesService: FilesService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.refresh$.pipe(
      switchMap(options => this.fetchFiles(options)),
      takeUntil(this.destroy$),
    )
    .subscribe(result => {
      if (result) {
        this.data = result.data;
        this.totalItems = result.totalCount;
      }
    });
    this.refresh$.next({
      page: 1,
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  public download() {
    this.toastService.pushToast({
      status: 'info',
      title: 'Test file name, pretty long file name here...',
      message: 'Testing 123',
    });
  }

  public onPageChange(page: number) {
    this.refresh$.next({
      page,
    });
  }

  private fetchFiles(options: RefreshOptions): Observable<FileListResponse> {
    return this.filesService.getFileList({
      page: options.page,
      size: 8,
    })
    .pipe(
      catchError(err => {
        console.error(err);
        this.toastService.pushToast({
          title: 'Error Fetching Data',
          message: 'There was an error fetching file list data. Please refresh and try again.',
          status: 'danger',
        });
        return of(null);
      }),
    );
  }

}
