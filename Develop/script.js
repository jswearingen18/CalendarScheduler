var dayOfWeek = moment().format("dddd, " + "LL");
$("#currentDay").text(dayOfWeek);
var x = 1;
var saveButton = $("<button>🖬</button>");

function createCalendar() {
    for (var i = 3; i < 19; i++) {
var createBox = $("<div></div>");
var timeEvent = $("<textarea></textarea>");
saveButton = $("<button>🖬</button>");
var time = $("<p></p>");

if (i <= 11) {
    $("div.text-center").append(createBox);
    $(createBox).addClass("row");
    time.text(i +"AM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
    if (moment().format("HH") > i) {
        $("textarea").addClass("future")
    } else if (moment().format("HH") == i) {
        $("textarea").addClass("present")
    } else {
        $("textarea").addClass("past")
    }
    
} else if (i == 12) {
    $("div.text-center").append(createBox);
    $(createBox).addClass("row");
    time.text(i +"PM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
    if (moment().format("HH") > i) {
        $("textarea").addClass("past")
    } else if (moment().format("HH") == i) {
        $("textarea").addClass("present")
    } else {
        $("textarea").addClass("past")
    }
   
} else {
    $("div.text-center").append(createBox);
    $(createBox).addClass("row");
    time.text(x +"PM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
    x++;
     if (moment().format("HH") > i) {
        $("textarea").addClass("future")
    } else if (moment().format("HH") == i) {
        $("textarea").addClass("present")
    } else {
        $("textarea").addClass("past")
    }
}
    } 

}
createCalendar();
