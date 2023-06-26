const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer aeQYzZuoK2vNv7UPLWFh8XFnUO4vmWsL4Uuzu5fdJaBlwKnM8y3Ahc36StviDNZA'
  }
};

fetch('https://api.iconfinder.com/v4/iconsets/1761/icons?count=10', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));