// Display current Day and Date in the header
var dateDisplayEl = $("#currentDay");

function displayDate() {
  var toDay = moment().format("dddd, MMMM Do, YYYY");
  dateDisplayEl.text(toDay);
}

// Display background color of user input area as: gray for past time, red for present time, and green for future times
var curHour = moment().format("H");
var textBar = $("textarea");
var saveBtn = $("saveBTN");

textBar.each(function (i) { 
  var input = $(this).attr('id')
  if (curHour > i + 9) {
    $(this).addClass("past");
  }
  if (curHour == i + 9) {
    $(this).addClass("present");
  }
  if (curHour < i + 9) {
    $(this).addClass("future");
  }
  $(this).val(localStorage.getItem(input))
});

// Store user input locally 
$(".saveBtn").on("click", storeLocal);

function storeLocal() {
  var textBar = $(this).parent().siblings("textarea").val();
  var input = $(this).parent().siblings("textarea").attr('id');
  localStorage.setItem(input, textBar)
  console.log(textBar);
  console.log(input)
}



setInterval(displayDate, 1000);
