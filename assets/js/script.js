// Grabbing the currentDay id from HTML
var dateTrackerElement = $('#currentDay');

// Getting current hour for color coding (not minutes bc we want to add color to each hour chunk)
var currentTime = moment().hours();

// Grabbing the hour ids from the HTML
var time9 = $('#hour-9');
var time10 = $('#hour-10');
var time11 = $('#hour-11');
var time12 = $('#hour-12');
var time13 = $('#hour-13');
var time14 = $('#hour-14');
var time15 = $('#hour-15');
var time16 = $('#hour-16');
var time17 = $('#hour-17');

// Array so the for loop can index through all time blocks for color coding them
var times = [time9, time10, time11, time12, time13, time14, time15, time16, time17]

// Makes the save button save the description input to the local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var saveData = $(this).siblings(".description").val();
    var hourId = $(this).parent().attr("id");
    localStorage.setItem(hourId, saveData);
});

// Retrieves the saved data from the local storage and keeps it in the text area
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


// using moment to track the current date and time
function timeTracker() {
    var currentDay = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    dateTrackerElement.text(currentDay);
}
// Setting timer interval
setInterval(timeTracker, 1000);

// Function for coloring the hour
function colorTime(currentHour) {
    // splitting the ids by "-" and taking only the 2nd part of each one, whch gives us only the hour in the form of a number
    var hour = parseInt(currentHour.attr('id').split("-")[1])
    if (currentTime == hour) {
        currentHour.addClass("present");
    } else if (currentTime > hour) {
        currentHour.addClass("past");
    } else {
        currentHour.addClass("future");
    }
};

// Indexing through the times array to color each of the time chunks without having to color them all separately
for (let index = 0; index < times.length; index++) {
    colorTime(times[index]);
}
