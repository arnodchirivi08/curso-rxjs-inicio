import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at arcu tincidunt, varius lectus ut, tincidunt ipsum. Nunc eros nibh, hendrerit ut iaculis finibus, convallis vel erat. Praesent non volutpat tortor. Etiam nisi augue, tempus at orci ac, auctor hendrerit risus. Fusce ut risus odio. Phasellus vel tempor lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
<br/><br/>
Nulla ac nisl nec arcu rutrum pellentesque. Suspendisse lacus lacus, commodo ut bibendum eget, sollicitudin ac tortor. Vivamus ex justo, lacinia quis quam id, dictum euismod dolor. Proin elementum nulla non ante consequat, in ultrices elit venenatis. Mauris condimentum lorem vel interdum tempus. Mauris sit amet lacus aliquet tortor bibendum ullamcorper. Phasellus ullamcorper, nunc ut dictum lobortis, ligula nulla consectetur nibh, eget aliquet libero nisi in purus. Fusce in mattis nisl. Nunc sit amet lacus tincidunt, rutrum risus nec, ultrices mauris.
<br/><br/>
Maecenas interdum mollis purus, a iaculis sem convallis non. Nullam ultricies ut nisi ut varius. Maecenas a euismod justo. Suspendisse porta lectus eget dui convallis, varius sodales enim tristique. Nunc erat libero, vestibulum eget justo accumsan, tincidunt fringilla turpis. In placerat tempor enim sit amet bibendum. Nunc nec lacinia diam, vel iaculis massa. Aliquam vitae mi at est mattis euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas facilisis id mauris vitae posuere. Maecenas vehicula condimentum nibh a varius. Sed vitae viverra turpis, sed aliquam enim. Nunc eu quam eget nisi viverra vulputate. Nulla pharetra velit id porta sollicitudin. Sed dapibus egestas massa at bibendum.
<br/><br/>
Vivamus urna sapien, posuere non tincidunt sit amet, facilisis vitae nisl. Curabitur vehicula volutpat quam vitae consectetur. Maecenas elementum neque vel dignissim posuere. Donec sit amet ante et nunc mattis efficitur. Proin vitae volutpat enim. Nulla facilisi. Quisque leo magna, lobortis non finibus sed, porttitor eu tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lacinia justo in lacinia convallis. Ut ut erat eu tortor ultrices viverra. Donec nec placerat nisi. Duis non magna velit. Maecenas et tincidunt tellus. In malesuada interdum sem ut ultricies.
<br/><br/>
Cras ac sapien quis est iaculis blandit ac nec lacus. Fusce imperdiet blandit tortor, eget interdum neque aliquam eu. Nullam semper risus sit amet egestas feugiat. Etiam a accumsan enim. Phasellus feugiat, elit ut consectetur tristique, nisi ex suscipit ligula, id dapibus eros lorem pharetra massa. In nec est nunc. Proin vel bibendum ipsum, sit amet porta ligula. Phasellus ultrices sapien sapien, non ullamcorper mi sollicitudin vitae. Suspendisse vehicula hendrerit felis nec tempor. Duis pretium dui eu lectus sollicitudin blandit. Donec scelerisque urna turpis, nec venenatis massa imperdiet eget. Vivamus sed mattis eros. Nullam quam ipsum, mattis eu felis pretium, convallis tincidunt nulla.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


// Stream
const scroll = fromEvent(document, 'scroll');

//scroll.subscribe(console.log)

const progress$ = scroll.pipe(
    // map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${ porcentaje }%`
});