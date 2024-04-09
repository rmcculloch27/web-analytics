//Get the query values for site
function site() {
var search_query = window.location.search; 
var yoda = search_query.split('&'); 
var luke = yoda[0];
return luke.slice(8);
};


//returns the h1 text on search results page: 
let a = document.querySelector("#main > div > div > div > div > div.l-content > div > h1 > em")
return a.textContent

//This next part has not been completed
var ben = document.getElementById('edit-search')
ben.value

//next step is to pass the returned results
h2.a[href] //or something like this


function gT() {
    // Get all <h2> elements on the page
    const h2Elements = document.querySelectorAll('h2');
    
    // Create an array to store the results
    const results = [];
  
    // Loop through each <h2> element
    h2Elements.forEach(h2 => {
      // Find the nearest <a> element underneath the <h2>
      const link = h2.nextElementSibling;
      return link}; 
  
      // Check if the next element is an <a> tag
      if (link && link.tagName === 'A') {
        // Store the <h2> text and the href of the <a> tag
        results.push({
          h2Text: h2.textContent,
          linkHref: link.getAttribute('href'),
        });
      }
    });
  
    return results;
  }
  
  // Call the function and get the results
  const h2AndLinks = getH2AndNearestLink();
  console.log(h2AndLinks);