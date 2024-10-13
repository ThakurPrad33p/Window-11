function check(value) {
    console.log(value);
  }
  
  function getTrip() {
    setTimeout(function() {
      return "Lets go to Trip";
    }, 1500);
  }
  
  value = getTrip();
  check(value);