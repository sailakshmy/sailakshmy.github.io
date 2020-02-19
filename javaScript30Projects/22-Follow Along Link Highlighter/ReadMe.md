1) Fetch all the link elements in the page.
2) Create a span element
3) Add a class highlight to the span element
4) Add the span element to the body of the document
5) Listen for a mouseenter event on each of our triggers
6) To figure out the width of the text, figure out the coordinates of the text.
7) Set the width and height of the element as the width and height of the span element.
8) Set the translate property with the left and top size as the transform style of the span element.
9) But, if we do this, it will not work perfectly with scroll. So, what we can do here is, create our 
own coordinates.
10) For my Coordinates, the width and the height will be the same as that of the text. The 
top and the left coordinates will be calculated as the top and left coordinates + the scrollY and scrollX
of the window element. This will then replace the linkCoordinates in step 7 and 8.
