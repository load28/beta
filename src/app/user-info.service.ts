import {Injectable, Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {map, Observable, shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private userInfo$ = new Observable<{
    userId: string;
    userName: string;
  }>((source) => {
    source.next({
      userId: '22',
      userName: 'min',
    });
  }).pipe(
    shareReplay({bufferSize: 1, refCount: true}),
  );

  private userName$: Observable<string | undefined> = this.userInfo$.pipe(
    map((user) => user?.userId),
    shareReplay({bufferSize: 1, refCount: true}),
  );

  private userName = toSignal(this.userName$);

  public getUserName(): Signal<string | undefined> {
    return this.userName;
  }
}
