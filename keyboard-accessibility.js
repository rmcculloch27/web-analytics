// shift + tab
// keyboard accessibility

var scrollCount = 0; 

var accScrolling = document.addEventListener('keydown', function(event) {
    if ((event.key === 'ArrowUp') || event.key === 'ArrowDown' || event.key === ' ' && event.target !== document.querySelector("#edit-keys")) {
        console.log('accessibility scrolling. Scroll count:' + scrollCount);
    }
}); //disable this if the user is typing in the search field; 


var navCount = 0; 

var accNav = document.addEventListener('keydown', function(event) {
    if ((event.shiftKey && event.key === 'Tab') || event.key === 'Tab') {
        console.log('accessibility navigation. Nav count:' + navCount);
    }
});

var linkClickCount = 0; 

var accLinckClick = document.addEventListener('keydown', function(event) {
    if ((event.key === 'Enter')) {
        console.log('accessibility link click. Link click count:' + linkClickCount);
    }
});


function setupAccessibilityLogging() {
    var scrollCount = 0;
    var navCount = 0;
    var linkClickCount = 0;

    var accScrolling = document.addEventListener('keydown', function(event) {
        if ((event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === ' ') && event.target !== document.querySelector("#edit-keys")) {
            scrollCount++;
            console.log('Accessibility scrolling. Scroll count:', scrollCount);
        }
    });

    var accNav = document.addEventListener('keydown', function(event) {
        if ((event.shiftKey && event.key === 'Tab') || event.key === 'Tab') {
            navCount++;
            console.log('Accessibility navigation. Nav count:', navCount);
        }
    });

    var accLinkClick = document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            linkClickCount++;
            console.log('Accessibility link click. Link click count:', linkClickCount);
        }
    });

    return function cleanupAccessibilityLogging() {
        document.removeEventListener('keydown', accScrolling);
        document.removeEventListener('keydown', accNav);
        document.removeEventListener('keydown', accLinkClick);
    };
}

var cleanupFunction = setupAccessibilityLogging();

