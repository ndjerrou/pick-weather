console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'From Javascript';

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
    response.json().then(({ err, location, forecast } = {}) => {
      if (err) {
        console.log('err', err);
        messageOne.textContent = err;
      } else {
        messageTwo.textContent = `${forecast}\n`;
        messageOne.textContent = `${location}`;
        console.log(location);
        console.log(forecast);
      }
    });
  });
});
