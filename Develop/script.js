var dayOfWeek = moment().format("dddd, " + "LL");
$("#currentDay").text(dayOfWeek);
var x = 1;
function createCalendar() {
    for (var i = 9; i < 18; i++) {
var timeEvent = $("<div></div>");
var saveButton = $("<button>💾</button>");
var time = $("<div></div>");

if (i <= 11) {
    $(".container").append(timeEvent);
    $(timeEvent).addClass("textarea");
    $(timeEvent).append(saveButton);
    $(saveButton).addClass("saveBtn");
    $(timeEvent).append(time, i +"AM");
    $(time).addClass("hour");
} else if (i == 12) {
    $(".container").append(timeEvent);
    $(timeEvent).addClass("textarea");
    $(timeEvent).append(saveButton);
    $(saveButton).addClass("saveBtn");
    $(timeEvent).append(time, i +"PM");
    $(time).addClass("hour");
} else {
    $(".container").append(timeEvent);
    $(timeEvent).addClass("textarea");
    $(timeEvent).append(saveButton);
    $(saveButton).addClass("saveBtn");
    $(timeEvent).append(time, x +"PM");
    $(time).addClass("hour");
    x++;
}
    }
}
createCalendar();