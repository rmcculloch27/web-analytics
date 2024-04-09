//teamsimmer
var allowedOrigins = ['*'];

var handleMessage = function(event) {
  // Abort if request doesn't come from a valid origin
  if (!allowedOrigins.includes(event.origin)) return;

  // Log the message contents to the console
  console.log(event.data);
};

window.addEventListener('message', handleMessage);


//teamsimmer - dispatcher
if (window.top !== window.self) {
    window.top.postMessage(
      // Serialize the message
      JSON.stringify({
        event: 'gtm.click',
        'gtm.elementUrl': 'https://www.brendonlally.com',
        pageUrl: document.location.href,
        pageTitle: document.title
      }),
      '*'
    );
  }


//analytics mania
window.addEventListener('message',
  function(e) {
    if (e.data.event && e.data.event.indexOf('calendly') === 0) {
      window.dataLayer.push({
        'event' : 'calendly',
        'calendly_event' : e.data.event.split('.')[1]
      });
    }
  }
);


//My Solution
