1) Listen for mouse eneter and mouse leave events on each of the li elements
2) Display the sub-list  on hover of each main list item. This will be done by adding and 
removing CSS classes.
	1- Add a trigger-enter class to the main list item
	2- Add a trigger-enter-active class to the mainlist item after 150ms
	The reason why we are splitting this into 2 classes is that in the original CSS, we are 
	setting the opacity to 0 and the display to none. Setting the display to block and the
	opacity to 1 together will not give us the expected result. Instead it will be a haphazard
	display.To avoid this, we first set the display to block, wait for 150ms, and then set the
	opacity to 1, in order to create a smooth transition. ALso, only after we set the 
	display to block, we will be able to get the coordinates of the dropdwon and the nav 
	elements using the getBoundingClientRect method.
	3- Add an open class to the background element.
	4- Fetch all the dropdown elements in the current main-list item. The reason this is being
	done inside the main-list item is that there are so many dropdowns in the document. This
	will make it easier to identify the dropdown.
	5- Get the details of the position of the dropdown and the nav elements. We are
	fetching the coordinates of the nav elements additionally, so that we can be prepared
	for any extra element that might appear on the screen dynamically. In case we don't
	consider the nav elements coordinates, the white box's properties might overlap
	with the dropdownn, giving it a distorted look.

	4- On the mouse leave, remove both the classes .

	