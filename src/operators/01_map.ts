import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1,5)
//     .pipe(map<number, string>((valor) => (valor * 10).toString()))
//     .subscribe(console.log);

// range(1,5)
//     .pipe(map<number, number>((valor) => (valor * 10)))
//     .subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(
    map(event => event.code)
);

const keyUpObjetoAnidado$ = keyUp$.pipe(
    map(event => event?.target['baseURI'])
);


keyUpCode$.subscribe((code) => console.log('map', code));
keyUpObjetoAnidado$.subscribe((code) => console.log('pluck', code));