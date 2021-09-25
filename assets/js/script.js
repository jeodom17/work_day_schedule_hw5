var dateDisplayEl = $("#currentDay");

function displayDate() {
  var toDay = moment().format("dddd, MMMM Do, YYYY");
  dateDisplayEl.text(toDay);
}

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

$(".saveBtn").on("click", storeLocal);

function storeLocal() {
  var textBar = $(this).parent().siblings("textarea").val();
  var input = $(this).parent().siblings("textarea").attr('id');
  localStorage.setItem(input, textBar)
  console.log(textBar);
  console.log(input)
}

// function init(){
//     allStorage();

//   function allStorage() {
//       debugger;
//       var values = [],
//          keys = Object.keys(localStorage),
//          i = keys.length;

//       while (i--) {
//           values.push(localStorage.getItem(keys[i]));
//       }
//       return values;
//   }
// }

setInterval(displayDate, 1000);
