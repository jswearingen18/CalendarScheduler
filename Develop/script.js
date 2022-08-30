var dayOfWeek = moment().format("dddd, " + "LL");
$("#currentDay").text(dayOfWeek);
var x = 1;
var saveButton = $("<button>🖬</button>");

function createCalendar() {
    for (var i = 3; i < 23; i++) {
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
   
} else if (i == 12) {
    $("div.text-center").append(createBox);
    $(createBox).addClass("row");
    time.text(i +"PM");
    $(createBox).append(time);
    $(time).addClass("hour");
    $(createBox).append(timeEvent);
    $(createBox).append(saveButton);
    $(saveButton).addClass("saveBtn");
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
   
}
function checkTime() {
    var currentTime = moment().format("HH");
    console.log(currentTime);
    timeEvent.each( function () {
        if (currentTime > i) {
            $(this).removeClass("future")
            $(this).removeClass("present")
            $(this).addClass("past")
        } else if (currentTime == i) {
            $(this).removeClass("past")
            $(this).removeClass("future")
            $(this).addClass("present")
        } else {
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")
        }
    })
}  
checkTime();
    }
}
createCalendar();
