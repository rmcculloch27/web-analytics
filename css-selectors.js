//CSS Selector

//Find the selector by copying the selector using right-click
#yui_3_17_2_1_1699403705110_163 > a
    //the last part identifies the element or elements in this case 'a'


//You can add data attributes to the elements. Ex. data-gtm-id='something-in-the-way'

//you'd look for the above with document.querySelector('[data-gtm-id]');


// Match the first <span> on the page that is a 
// descendant (not necessarily direct) of an <a> element 
// with the class "home"
document.querySelector(
    'a.home span'
  );
  
  // Match any descendant (not necessarily direct) of <a class="home">
  document.querySelector(
    'a.home *'
  );

  // Match an element with "home", "content", and "phone" in its
// class attribute, e.g. <a class="phone content home"/>
document.querySelector(
    'a.home.content.phone'
  );
  
  // Match an element with "home" as the ID value and with
  // "content" in the class attribute, 
  // e.g. <a class="content phone" id="home"/>
  document.querySelector(
    'a.content#home'
  );
  
  // Match an element with the attribute data-gtm-id, e.g.
  // <a data-gtm-id="home"/>
  document.querySelector(
    '[data-gtm-id]'
  );
  
  // Match an <a> element that is the descendant of (not
  // necessarily direct) a <div id="main">
  document.querySelector(
    'div#main a'
  );
  
  // Match the same as above, but now it must be a
  // direct descendant, e.g. <div id="main"><a/></div>
  document.querySelector(
    'div#main > a'
  );
  
  // Match an <a> element that has the string teamsimmer.com
  // in its href value, e.g. <a href="https://www.teamsimmer.com/">
  document.querySelector(
    'a[href*="teamsimmer.com"]'
  );
  
  // Match the same as above, but this time the element
  // MUST NOT have the teamsimmer.com in the href
  document.querySelector(
    'a:not([href*="teamsimmer.com"])'
  );
  
  // Match any element that is a direct descendant of
  // <div id="main">,
  document.querySelector(
    'div#main > *'
  );
  