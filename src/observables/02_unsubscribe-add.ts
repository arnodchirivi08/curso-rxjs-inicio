import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log('next: ', valor),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber => {
    // Crear un contador 1,2,3
    let contador = 0;
    const interval = setInterval(() => {
       contador++;
       subscriber.next(contador);
       console.log(contador);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();

    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscription = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

// const subscription = intervalo$.subscribe(num => console.log('Num: ', num));
// const subscription2 = intervalo$.subscribe(num => console.log('Num: ', num));
// const subscription3 = intervalo$.subscribe(num => console.log('Num: ', num));

subscription.add(subscription2);
subscription2.add(subscription3);


setTimeout(() => {
    subscription.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Completado tomeout')
}, 6000);