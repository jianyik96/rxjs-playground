import { Observable, combineLatest, filter, forkJoin, from, fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { EMPTY, timer, Subject } from 'rxjs';
import { debounceTime, map, tap, catchError, concatMap } from 'rxjs/operators'

const emitButton = document.querySelector('button#emit');
const inputElement: HTMLInputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');

const value$ = new Subject<string>();

// fromEvent(emitButton, 'click').subscribe(
//     () => value$.next(inputElement.value)
// )

fromEvent(emitButton, 'click').pipe(
    map(() => inputElement.value)
).subscribe(value$)

fromEvent(subscribeButton, 'click').subscribe(
    () => {
        console.log('New Subscription');
        value$.subscribe(val => console.log(val))
    }
)