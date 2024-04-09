

//Avoid these
document.write

//Also not this
eval('window.globalVar = "Lex Luther";');
window.globalVar

//load stuff after the page loads

//1. create a new script type

<script src="https://www.wegotcha.com/this-is-the-motha-load"</script>:


//run some JS
<script> 
console.log('hello'); 
</script>

///sooooo if you want to load JS script after the page_load has completed

(function() {
    var scriptElement = document.createElement('script');
    scriptElement.async = true; 
    scriptElement.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-ABCDEF';
    document.body.appendChild(scriptElement);
})();

///run inline script

(function() {
    var scriptElement = document.createElement('script');
    scriptElement.innerHTML = 'window.globalVar="Hello world!"; console.log(window.globalVar);';//type-your-JS-here-literally-not-a-.JS-file
    document.body.appendChild(scriptElement);
})();


// Always use an IIFE
(function() {

    // Step 1: Create a <script> element
    var script = document.createElement('script');
  
    // Step 2: Update its src attribute to point to the script URL
    script.src = 'https://vendor.com/someScript.js';
  
    // Step 3: Set the script to load async
    script.async = true;
  
    // Step 4: Add the script to the page
    document.body.appendChild(script);
  
  // Close the IIFE
  })();
