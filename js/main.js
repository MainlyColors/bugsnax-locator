//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

const quoteEl = document.querySelector('#quote');
const characterEl = document.querySelector('#character');

function createBugsnaxLiElement(name, location) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const pBug = document.createElement('p');
  const pLoc = document.createElement('p');

  div.classList.add('list-entry');

  pBug.textContent = name;
  pLoc.textContent = location;

  div.appendChild(pBug);
  div.appendChild(pLoc);

  li.appendChild(div);

  return li;
}

const ul = document.querySelector('ul');

function getFetch() {
  // const url = `https://www.bugsnaxapi.com/api/bugsnax`;
  // to get around CORS error, took the data
  const url = '../JSON/bugsnax.json';

  // proxy from https://codetabs.com/cors-proxy/cors-proxy.html to get around cors
  // const url =
  //   'https://api.codetabs.com/v1/proxy?quest=https://www.bugsnaxapi.com/api/bugsnax';

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      data.forEach((obj) => {
        ul.appendChild(createBugsnaxLiElement(obj.name, obj.location.name));
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
// { headers: { 'Access-Control-Allow-Origin': '*' } }
// {
//   headers: { 'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/' },
// }
