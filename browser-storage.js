//cookies

document.cookie; //only first party cookies & only name and value

document.cookie = 'cokie_test=true; domain=teamsimmer.com; path=/; max-age=' + (60*60*24*30)
//60 sec * 60 min * 24 hrs * 30 days though Safari browser limits to 7 days

var getCookie = function(name) {
    name += '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };
  
  // To read a cookie:
  getCookie('name');


window.localStorage //only client side and can't use across subdomain

window.localStorage.getItem('cookie_name')

JSON.parse(window.localStorage.getItem('cookie_name'))

window.localStorage.setItem('storage_test', 'true');

window.localStorage.removeItem('storage_test'); 