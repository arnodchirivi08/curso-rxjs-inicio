import { fromEvent } from 'rxjs';

/*
* Eventos del DOM
*/
const scr1$ = fromEvent<PointerEvent>(document, 'click');
const scr2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (val) => console.log('next', val)
}

scr1$.subscribe(({x, y}) => {
    console.log(x,y);
});

scr2$.subscribe(evento => {
    console.log(evento.key);
});