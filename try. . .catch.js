//try catch used when data is dependent on external api
try {
    console.log(DoesNotExist);
  } catch(e) {
    console.log('An error occurred: ' + e.name + ' – ' + e.message);
  }

