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
    getSchedule();
});
function getSchedule() {
    $("#9 .description").val(locaStorage.getItem("9am"));
    $("#10 .description").val(locaStorage.getItem("10am"));
    $("#11 .description").val(locaStorage.getItem("11am"));
    $("#12 .description").val(locaStorage.getItem("12am"));
    $("#1 .description").val(locaStorage.getItem("1pm"));
    $("#2 .description").val(locaStorage.getItem("2pm"));
    $("#3 .description").val(locaStorage.getItem("3pm"));
    $("#4 .description").val(locaStorage.getItem("4pm"));
    $("#5 .description").val(locaStorage.getItem("5pm"));
};


var dateTrackerElement = $('#currentDay');

function timeTracker() {
    var currentDay = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    dateTrackerElement.text(currentDay);
    // dateTrackerElement.textContent = currentDay;
    colorTime();

}
setInterval(timeTracker, 1000);

// var currentTime = moment().format('H');
var time9 = $('#9');
var time10 = 10;
var time11 = 11;
var time12 = 12;
var time1 = 13;
var time2 = 14;
var time3 = 15;
var time4 = 16;
var time5 = 17;

function colorTime() {
    if (currentTime == time9) {
        $("#9 .description").addclass("present");
    } else if (currentTime < time9) {
        $("#9 .description").addclass("past");
    } else {
        $("#9 .description").addclass("future");
    }
    
    if (currentTime == time10) {
        $("#10 .description").addclass("present");
    } else if (currentTime < time10) {
        $("#10 .description").addclass("past");
    } else {
        $("#10 .description").addclass("future");
    }
};

