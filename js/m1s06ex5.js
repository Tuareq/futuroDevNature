componentDidMount() {
  console.log("did mount");
  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(function(responseAsJson) {
      quotes = responseAsJson;
      console.log("quotes test: " + quotes[45].quote);
      preloadImages();
    })
    .catch(error => console.log("fetch error: " + error));
}

function preloadImages() {
  console.log("preload got called");
  quotes.forEach(function(x) {
    // fetch image
    fetch(x.image.url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.blob();
      })
      .then(function(image) {
        imageArr.push(image);
      })
      .catch(error => console.log("image fetch error: " + error));
  });
}