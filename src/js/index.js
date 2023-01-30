import '../scss/styles.scss';

const accordionElement = document.getElementById('accordion');

accordionElement.addEventListener('click', ev => {
  accordionElement.querySelectorAll('.accordion__body').forEach(item => (item.style.maxHeight = 0));

  const element = ev.target.children[1];
  element.style.maxHeight = element.scrollHeight + 'px';

  console.dir(element);
});
