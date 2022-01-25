// var today = moment();

// var currentDayTime = today.format("[Today is] dddd")
// $("#today").text(currentDayTime);


// let now = moment().format('LLLL');

// var currentTime = $('#currentTime');
// function displayCurrentTime(){
//     currentTime = 

// };
var dateElement = $("#currentDay");

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var saveData = $(this).siblings(".description").val();
    console.log(saveData);
    var hourId = $(this).parent().attr("id");
    console.log(hourId);
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
    $("currentDay").text(currentDay);
    dateTrackerElement.textContent = currentDay;

}
setInterval(timeTracker, 1000);