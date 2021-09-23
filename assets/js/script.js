var dateDisplayEl = $('#currentDay');

function displayDate() {
    var rightNow = moment().format("dddd, MMMM Do, YYYY");
    dateDisplayEl.text(rightNow);
  }




  setInterval(displayDate, 1000);