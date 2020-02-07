1) Select all the images in the document
2) Run a function every time the user scrolls the document. [using an event listener]
3) The above step will cause the scroll event to be logged more than 100 times in 2 seconds.To 
   avoid this, we wrap the function in step-2 in a debounce function. The debounce function will
   wait for a specific number of ms, before running the function again for the same event. It is
   better to use the debounce function every time you work with scroll event.
4) Now, we have to define when the images should pop up. Loop through the images  and figure out how much
    of the images have to be shown.(That is if it has to be completely hidden or completely visible 
    or partially visible.)
   For this, what we have to do is figure out the current scroll position we are in(in this case, we will
   take the Y coordinate). This will give us the position from the top. We also need to figure out
   the position from the bottom. For this we use the innerHeight of the viewport.
   We add the above parameters and then subtract the height of the image divided by 2. This is 
   done so as to figure out when the image has to be shown partially.
5) The above step only handles the situation when we scroll from top to bottom. For the reverse
   scenario, we add the image's offsetTop property (this will tell us how far the image is from
   the top of the viewport) and the height of the image.