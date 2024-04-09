//event listener

var allowedOrigins = ['https://td.doubleclick.net/td/rul/10860854255', 'https://calendly.com/brendonlally/the-ones-and-twos-wedding-planning-meeting'];

var handleMessage = function(event) {
  // Abort if request doesn't come from a valid origin
  if (!allowedOrigins.includes(event.origin)) return;

  // Log the message contents to the console
  console.log(event.data);
};

window.addEventListener('message', handleMessage);

//event dispatcher
// Only run if in an iframe
if (window.top !== window.self) {
    window.top.postMessage(
      // Serialize the message
      JSON.stringify({
        event: 'gtm.click',
        'gtm.elementUrl': 'https://calendly.com',
        pageUrl: document.location.href,
        pageTitle: document.title
      }),
      'https://www.brendonlally.com/contact'
    );
  }


  //Try this listener
  (function() {
    // List all the origins that might send dataLayer messages to this listener
    var allowedOrigins = [
        'https://calendly.com',
        'https://td.doubleclick.net/td/rul/10860854255'
    ];

    var handleMessage = function(event) {
      // Validate the origin
      if (!allowedOrigins.includes(event.origin)) return;

      // Only handle JSON
      try {
        var msg = JSON.parse(event.data);

        // Push the message object to dataLayer
        window.dataLayer.push(msg);
      } catch(e) {}
    };

    window.addEventListener('message', handleMessage);
  })();


  //Dispatcher
  function() {
    /**
     * Replace this with the URL origin of the top window
     */
    var topOrigin = 'https://www.parent.origin';

    /**
     * List the events that should be excluded from dispatch
     */
    var excludeEvents = [
      'gtm.js',
      'gtm.dom',
      'gtm.load'
    ];

    /**
     * Set to true to send the full dataLayer history to the top window
     * upon initialization
     */
    var sendHistoryUponInit = true;

    /**
     * Set the event name prefix and dataLayer namespace
     * for messages emitted from this iframe.
     */
    var dataLayerNamespace = 'iframe';

    /**
     * Solution code begins
     */

    /** Break if not in an iframe */
    if (window.top === window.self) return;

    var sendToTop = function(obj) {
      /** Only send plain objects */
      if (obj.constructor !== Object) return;
      if (excludeEvents.includes(obj.event)) return;

      // Set page URL and page title as default keys
      obj.pageUrl = obj.pageUrl || document.location.href;
      obj.pageTitle = obj.pageTitle || document.title;

      var wrappedObj = {};
      wrappedObj[dataLayerNamespace] = obj;
      /** If there is no event name in the object, use "message" */
      wrappedObj.event = dataLayerNamespace + '.' + (obj.event || 'message');

      window.top.postMessage(JSON.stringify(wrappedObj), topOrigin);
    };

    /** Send dataLayer history upon init */
    if (sendHistoryUponInit) {
      window.dataLayer.forEach(function(msg) {
        sendToTop(msg);
      });
    }

    /** Overload the dataLayer.push() method with a custom handler */
    var oldPush = window.dataLayer.push;
    window.dataLayer.push = function() {
      var states = [].slice.call(arguments, 0);
      states.forEach(function(state) {
        sendToTop(state);
      });
      return oldPush.apply(window.dataLayer, states);
    };
  })();