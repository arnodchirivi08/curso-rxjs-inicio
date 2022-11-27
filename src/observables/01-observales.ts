import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('siguiente [next]: ', valor),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
}

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    subscriber.next('Hola');
    subscriber.next('Cielo');
 
    // Forzar error
    // const a = undefined;
    // a.nombre = 'Arnold';

    subscriber.complete();
    
    subscriber.next('Hola');
    subscriber.next('Arnod');

});

obs$.subscribe(observer);

// obs$.subscribe({
//     next: valor => console.log('next ', valor),
//     error: error => console.warn('error', error),
//     complete: () => console.info('Completado')
// });

