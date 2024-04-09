//data attributes
data-gtm-id="web-browsers"
//data is necessary to denote it is a data attribute
// having a data namespace will be helpful especially with other scripts on the page

// Fetch a reference to the element with the data attribute
var linkElement = document.querySelector('a[data-gtm-id]');

// Retrieve the value from the data attribute
var linkId = linkElement.getAttribute('data-gtm-id');