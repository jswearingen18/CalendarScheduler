var dayOfWeek = moment().format("dddd, " + "LL");
$("#currentDay").text(dayOfWeek);
function calenderAddTime() {
    $("<div></div>").after(".container");
}
calenderAddTime();