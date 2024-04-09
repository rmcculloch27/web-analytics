
//this checks the value of the key outsid eof GTM
window.google_tag_manager['container-id'].dataLayer.get('key for value you want to check')

//if you push a key that's already available in GTM it will either: 
// a) overwrite the key in the data model; this happens for primitive values (set to whatever was last pushed into dataLayer)
// b) or merge the key; if you push an object ex. {user: {name: 'Rock and Roll'}}
////GTM will continue to look for keys recursively