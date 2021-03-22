console.log('Welcome to the Skill Challenge')

const button = document.querySelector('.toggle');
const pane = document.querySelector('.pane');

button.addEventListener('click', () => {
  pane.classList.toggle('open');
});