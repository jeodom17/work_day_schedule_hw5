var dateDisplayEl = $('#currentDay');

function displayDate() {
    var toDay = moment().format("dddd, MMMM Do, YYYY");
    dateDisplayEl.text(toDay);
  }

var curHour =  moment().format('H');
var textBar = $('textarea');
var saveBtn = $('saveBTN');

textBar.each(function(i){
    if (curHour > i+9) {$(this).addClass('past')}
    if (curHour == i+9) {$(this).addClass('present')}
    if (curHour < i+9) {$(this).addClass('future')}
})

$('saveBtn').on('click' , storeLocal);


function storeLocal() {

    $(this).parent().siblings('textarea').each(function(i){
        useInput[i]-$(this).val()
        console.log(this)
    })
    console.log(useInput)
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



















