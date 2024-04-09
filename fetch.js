fetch('https://ipapi.co/json')
.then(function(response) {
    console.log(response);
});

//That fetch request is quite simple. You can chain the promises (using .then method)

fetch('https://www.some-api.com/endpoint')
  .then(function(response) {
    if (response.status !== 200) {
      throw new Error('Request load failed!');
    }
    return response.json();
  }).then(function(response) {
    console.log(JSON.parse(response));
  }).catch(function(error) {
    console.log(error);
  });

  //You can also use fetch in the Network requests by right clicking on them and copy as fetch