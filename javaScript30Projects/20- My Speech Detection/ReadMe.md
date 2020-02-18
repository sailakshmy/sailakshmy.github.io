1) Create an instance of recognition;
2) Create a new paragraph everytime the user takes a break from speaking.
	1- Create a p element.
	2- Select the words class
	3- Append the words class to the p element
3) add an evenet Listener to the recognition fopr the result.
	1- create a variable to conver the e.results into an array
	2- map the first result from the array
	3- map the transcript of the first element of the array
	4- Join the elements to form a string
	5- assign the transcripts variable to the p element's text content.
4) Once the user takes a break, add an event listener to listen for the end event.
	1- In this listener, start the recognition once again

