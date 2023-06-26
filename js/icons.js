function fetchRandomIcon() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // cors-anywhere proxy URL
  const apiUrl = 'https://api.iconfinder.com/v4/iconsets?count=10'; // Iconfinder API URL

  fetch(proxyUrl + apiUrl, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      // Process the response and retrieve the random icon
      const iconsets = response.iconsets;
      const randomIcon = iconsets[Math.floor(Math.random() * iconsets.length)];

      console.log(randomIcon);
      // Display the random icon
    })
    .catch(err => {
      console.error(err);
    });
}

// Call the fetchRandomIcon function to fetch and display a random icon
fetchRandomIcon();
