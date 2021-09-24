var dateDisplayEl = $('#currentDay');

function displayDate() {
    var toDay = moment().format("dddd, MMMM Do, YYYY");
    dateDisplayEl.text(toDay);
  }
















function init(){
    allStorage()

  function allStorage() {
      debugger;
      var values = [],
         keys = Object.keys(localStorage),
         i = keys.length;

      while ( i-- ) {
          values.push(localStorage.getItem(keys[i]));
      }   
      return values;
  }
}

  setInterval(displayDate, 1000);



















