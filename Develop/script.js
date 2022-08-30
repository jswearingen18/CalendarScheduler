var dayOfWeek = moment().format("dddd, " + "LL");
$("#currentDay").text(dayOfWeek);
var x = 1;

function createCalendar() {
    for (var i = 7; i < 19; i++) {
var createBox = $("<div></div>");
var timeEvent = $("<div></div>");
var saveButton = $("<button>💾</button>");
var time = $("<p></p>");

if (i <= 11) {
    $(".container").append(createBox);
    $(createBox).addClass("row");
    time.text(i +"AM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(timeEvent).addClass("textarea");
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
    
} else if (i == 12) {
    $("div.text-center").append(createBox);
    $(createBox).addClass("row");
    time.text(i +"PM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(timeEvent).addClass("textarea");
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
   
} else {
    $("div.text-center").append(createBox);
    $(createBox).addClass("row");
    time.text(x +"PM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(timeEvent).addClass("textarea");
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
    x++;
}
    }
}
createCalendar();