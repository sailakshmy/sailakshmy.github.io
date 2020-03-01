We don't use setInterval directly in the timer function because somethimes setInterval does not work as 
expected, especially in certain situations like scrolling the page, especially in ios
(this could be because of some browser side intervention or for performance issues)
1) Get the number of seconds given as input and calculate how many seconds to be shown
	1- Clear any existing timer using a global variable and assign that variable to
	setInterval function in Step 4.
	2-Calculate the number of seconds to be count down
	3- Display the seconds left. This is done because the setInterval takes a second
	to run. Hence we have to make up for that second gap.
	4- Stop the setInterval from running if the no of seconds to be count down
	is less than 0
	5- Display the seconds left
2) Display the end time in terms of hours and minutes
3) Hook up the buttons on the UI to the timer function on click of the respective 
buttons.


