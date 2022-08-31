$(document).ready(function(){


var dayOfWeek = moment().format("dddd, " + "LL");
$("#currentDay").text(dayOfWeek);
var x = 1;
var saveButton = $("<button>🖬</button>");

function createCalendar() {
    for (var i = 6; i < 19; i++) {
var createBox = $("<div></div>");
var timeEvent = $("<textarea></textarea>");
saveButton = $("<button>🖬</button>");
var time = $("<p></p>");

if (i <= 11) {
    $("div.text-center").append(createBox);
    $(createBox).addClass("row");
    $(createBox).attr("id", "hour-"+[i]);
    time.text(i +"AM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(timeEvent).addClass("calendarEvent");
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
   
} else if (i == 12) {
    $("div.text-center").append(createBox);
    $(createBox).addClass("row");
    $(createBox).attr("id", "hour-"+[i]);
    time.text(i +"PM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(timeEvent).addClass("calendarEvent");
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
} else {
    $("div.text-center").append(createBox);
    $(createBox).addClass("row");
    $(createBox).attr("id", "hour-"+[i]);
    time.text(x +"PM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(timeEvent).addClass("calendarEvent");
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
    x++;
   
}
function checkTime() {
    var currentTime = moment().format("HH");
    timeEvent.each( function () {
        if (currentTime > i) {
            $(this).addClass("past")
        } else if (currentTime == i) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    })
}  
checkTime();
    }
}
createCalendar();
$(".saveBtn").on("click", function() {
    var value = $(this).siblings('.calendarEvent').val();
    var timeEl = $(this).parent().attr('id');
    localStorage.setItem(timeEl, value);
    })
    $('#hour-6 .calendarEvent').val(localStorage.getItem("hour-6"));
    $('#hour-7 .calendarEvent').val(localStorage.getItem("hour-7"));
    $('#hour-8 .calendarEvent').val(localStorage.getItem("hour-8"));
    $('#hour-9 .calendarEvent').val(localStorage.getItem("hour-9"));
    $('#hour-10 .calendarEvent').val(localStorage.getItem("hour-10"));
    $('#hour-11 .calendarEvent').val(localStorage.getItem("hour-11"));
    $('#hour-12 .calendarEvent').val(localStorage.getItem("hour-12"));
    $('#hour-13 .calendarEvent').val(localStorage.getItem("hour-13"));
    $('#hour-14 .calendarEvent').val(localStorage.getItem("hour-14"));
    $('#hour-15 .calendarEvent').val(localStorage.getItem("hour-15"));
    $('#hour-16 .calendarEvent').val(localStorage.getItem("hour-16"));
    $('#hour-17 .calendarEvent').val(localStorage.getItem("hour-17"));
    $('#hour-18 .calendarEvent').val(localStorage.getItem("hour-18"));
})