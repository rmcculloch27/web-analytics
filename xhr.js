// 1. Create a new XHR instance
var xhr = new XMLHttpRequest();

// 2. Open it with a method, URL, and possible other parameters
xhr.open('GET', 'https://www.some-api.com/endpoint', true);

// 3. Add event listeners or the onreadystatechange handler
xhr.addEventListener('load', function(event) {
  if (this.status !== 200) {
    throw new Error('Request load failed!');
  } else {
    console.log(JSON.parse(event.target.responseText));
  }
});

// 4. Send the XHR
xhr.send();