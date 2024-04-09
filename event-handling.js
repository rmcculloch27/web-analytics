//Workflow

//Go to Elements tab and copy the JS path for the element
var searchElement = document.querySelector("#search-global-search-form")

searchElement.addEventListener('mouseover', function(event) {
    console.log('Mouseover happened on the Home link!');
    window.dataLayer = window.dataLayer || []; 
    window.dataLayer.push({
        event: 'hover_on_home', 
        eventMetadata: event
    });
});

//Variation number 2
var searchElement = document.querySelector("#search-global-search-form")

searchElement.addEventListener('click', function(event) {
    event.preventDefault(); //the default action for a click is a redirect; we don't want this to happen while testing
    console.log(event.type + 'happened on the Home link!'); //event.type is a method in the metadata
    window.dataLayer = window.dataLayer || []; 
    window.dataLayer.push({
        event: 'click_on_home', 
        eventMetadata: event
    });
});

// Here’s a list of useful browser events you might want to handle:

// – click is collected for clicks (and taps on a touch device).
// – mousedown is collected when the user presses the mouse button (or touches) down but doesn’t yet release it.
// – mouseup is collected when the user releases the click or touch.
// – mouseover is detected when the user moves the mouse over the element (hover).
// – mousemove is detected when the mouse moves on the page.
// – keydown is detected when the user presses down a key on the keyboard (or a combination of keys).
// – keyup is when the keypress is released.
// – change is detected when the contents of a form element (e.g. <input>) change.
// – focus is for when a form element receives focus (the user activates it with a click, for example).
// – blur is for when a form element loses focus (the user clicks or moves out of it).
// – submit is dispatched when a form is submitted normally.
// – scroll is detected when the user scrolls the page.
// – load can be attached to an asynchronous element (such as <script>) to detect when it has completed loading. If added to the window object, you can detect when the page has completed loading.