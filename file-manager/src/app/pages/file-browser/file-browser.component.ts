import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileListResponse, FilesService } from '@api';
import { ToastService } from '@components';
import { Observable, Subject, of } from 'rxjs';
import { catchError, takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit, OnDestroy {

  public data: FileListResponse['data'];
  private refresh$ = new Subject();
  private destroy$ = new Subject();
  constructor(
    private filesService: FilesService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.refresh$.pipe(
      switchMap(() => this.fetchFiles()),
      takeUntil(this.destroy$),
    )
    .subscribe(result => {
      if (result) {
        this.data = result.data;
      }
    });
    this.refresh$.next();
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

  private fetchFiles(): Observable<FileListResponse> {
    return this.filesService.getFileList({
      page: 1,
      size: 9,
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
