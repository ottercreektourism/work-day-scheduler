# work-day-scheduler

Task:
- Given some starter CSS and the backbone to an HTML doc, the task was to create a schedule for an 8 hour work day with categories for every hour
- The use can type what they have to do for the hour into each of the time blocks and save their response so it does not erase their data when the page is refreshed
- The time blocks are color coded so that the times in the past are shaded grey, the future is green, and the present hour is red
- Create a time tracker at the top so the user can always see what time it is, updated every second, when they look at their scheduler

What was done:
- A general HTML structure was created with ids classes and tags that match the existing CSS
- A function was added to track the current time using moment and display it at the top of the page
- A function was added to save the data into local storage, with another function to retrieve it and make sure that the user's input would stay in the desired time block
- A function was created to color code an individual time block
- A for loop with accompanying array of all time blocks was created to loop through each time block and color them all without having to type the color coding fuction for each separate time block

How to use:
- The user will click on the middle column of their schedule, type what they have going on that hour, and click the save icon on the right to save their entry into local storage
- The user is able to re-enter that text area and delete or change their entry
- The user can see that the current hour is highlighted in red showing urgency of current tasks, and green to show tasks that are not currently due but will be due soon

Screenshots of the working site are provided here:
https://github.com/ottercreektourism/work-day-scheduler/issues/1#issue-1114257801

Here is the link to the deployed site:
https://ottercreektourism.github.io/work-day-scheduler/
