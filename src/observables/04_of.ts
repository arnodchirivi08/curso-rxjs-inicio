import { of } from 'rxjs';

const obs$ = of<number[]>(...[1,2,3,4,5], 6,7,8);
// const obs$ = of([1,2], {a: 1, b:2}, function(){}, true, Promise.resolve());


console.log('Inicio del Obs$');
obs$.subscribe({
    next: (next) => console.log('next', next),
    error: () => { null },
    complete: () => console.log('Terminamos la secuencia')
});
console.log('Fin del Obs$');