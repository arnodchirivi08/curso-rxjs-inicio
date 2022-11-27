import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>( subs => {
    const intervalId= setInterval(() => subs.next( Math.random() ), 1000);

    return () => { 
        clearInterval(intervalId);
        console.log('Intervalo destruido');
    };
});

/*
* 1 - Casteo múltiple
* 2 - Tambien es un observer
* 3 - Next, error y complete
*/

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);


// const subscripcion1 = intervalo$.subscribe(randon => console.log('Subs1', randon));
// const subscripcion2 = intervalo$.subscribe(randon => console.log('Subs2', randon));

const subscripcion1 = subject$.subscribe(observer);
const subscripcion2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)