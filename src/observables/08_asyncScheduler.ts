import { asyncScheduler } from 'rxjs';

// setTimeout(() => {
    
// }, 3000);

// setInterval(() => {

// }, 3000)


const saludar = () => console.log('Hola mundo');
const saludarDos = ({nombre, apellido}) => console.log(`Hola ${nombre} ${apellido}`);

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludarDos, 2000, { nombre: 'Arnod',apellido: 'Chirivi'} );


const subs = asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// },6000);

asyncScheduler.schedule(()=> subs.unsubscribe(), 6000);
