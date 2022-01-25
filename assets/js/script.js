// var today = moment();

// var currentDayTime = today.format("[Today is] dddd")
// $("#today").text(currentDayTime);


// let now = moment().format('LLLL');

// var currentTime = $('#currentTime');
// function displayCurrentTime(){
//     currentTime = 

// };
// var dateElement = $("#currentDay");
// var currentTime = moment().format('H');

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var saveData = $(this).siblings(".description").val();
    // console.log(saveData);
    var hourId = $(this).parent().attr("id");
    // console.log(hourId);
    localStorage.setItem(hourId, saveData);
    
});

function getSchedule() {
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));
    $("#5 .description").val(localStorage.getItem("5"));
};

getSchedule();


var dateTrackerElement = $('#currentDay');

function timeTracker() {
    var currentDay = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    dateTrackerElement.text(currentDay);
    // dateTrackerElement.textContent = currentDay;

}
setInterval(timeTracker, 1000);

var currentTime = moment().hours();

var time9 = $('#hour-9');
var time10 = $('#hour-10');
var time11 = $('#hour-11');
var time12 = $('#hour-12');
var time13 = $('#hour-13');
var time14 = $('#hour-14');
var time15 = $('#hour-15');
var time16 = $('#hour-16');
var time17 = $('#hour-17');
var times = [time9,time10, time11, time12, time13, time14, time15, time16, time17]

function colorTime(currentHour) {
    console.log(currentHour);
    var hour = parseInt(currentHour.attr('id').split("-")[1])
    if (currentTime == hour) {
        currentHour.addClass("present");
    } else if (currentTime > hour) {
        currentHour.addClass("past");
    } else {
        currentHour.addClass("future");
    }
};
// colorTime(time9);
for (let index = 0; index < times.length; index++) {
    colorTime(times[index]);
}

