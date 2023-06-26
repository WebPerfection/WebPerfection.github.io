function fetchRandomIcon() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer X0vjEUN6KRlxbp2DoUkyHeM0VOmxY91rA6BbU5j3Xu6wDodwS0McmilLPBWDUcJ1'
    }
  };

  fetch('https://api.iconfinder.com/v4/iconsets?count=10', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}


// Call the fetchRandomIcon function to fetch and display a random icon
fetchRandomIcon();
