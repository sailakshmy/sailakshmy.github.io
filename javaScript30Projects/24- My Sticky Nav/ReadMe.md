1) Fetch the nav bar of the page
2) Assign the offsetTop of the nav bar to a new variable
3) Add an event listener for the scroll event on the window.
4) If the window.scrollY is >= the nav bar's offset value, add a class to the body element.
Else, remove the class from the classList
5) Add a CSS style rule for the newly created class and the nav elements to fix the position
of the nav bar on the screen.
6) Add a CSS style rule for the logo class and the newly created class to increase the max-width
of the logo element
7) Add a CSS Style rule for the site-wrap class and the newly created class to scale the elemnts
in the class