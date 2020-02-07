This project deals with local storage and Persisting of State Events
1) Fetch the form and the list of items
2) On the Submit buttonm of the form, add an event listener for the submit button
3) In the event handler function, prevent the page refresh.
4) Then, fetch the text that is keyed in by the user.
5) Add that text to an object with a variable to set the selection of checkbox as false
6) After creating an object, push it to the items array that will be displayed on screen
with a checkbox
7) Define a function that will populate the items elements as a list. This function needs
2 parameters. 1 - the items that are input by the user that is being stored in the array. 
2- The place to display the HTML
8) Use the localStorage.setItem to persist the item's state and the localStorage.getItem to 
fetch the stored elements in the localStorage
9) Event Delegation. When the elements are populated as a list on the UI, we have to handle
the checkbox suggestion. To do this, create a new function
10) Now, we need to add an eventListener on the parent that is <ul>, because we cannot have
an event listener on the checkbox because the checkboxes are still not loaded on the UI.
