// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const accordionElement = document.getElementById('accordion');

accordionElement.addEventListener('click', ev => {
  console.log(ev.target.parentElement.parentElement.children[1]);
  ev.target.parentElement.parentElement.children[1].classList.add('.accordion__body--show');
});
