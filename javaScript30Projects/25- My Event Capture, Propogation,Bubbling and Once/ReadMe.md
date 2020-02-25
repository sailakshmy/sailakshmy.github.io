- When you click on an element, it is going to capture the elements from top-down,
but the events are fired yet. That is, it is figuring out where the event has taken
place by going through each element from top to bottom. 
- Once it has figured out the element on which the event has been triggered, it is going
to trigger the event in all the elements from the bottom, via the bottom up approach

In the addEventListener, if you add a 3rd paramter, which is expected to be an object with
{capture: true}, what this will do is, instead of triggering the events in the elements via
the bottom-up approach, it will capture it via the top-down approach itself.
The default value of capture is false, hence, by default, the bottom0-up approach will be 
followed.

In the 3rd parameter, which is an object, if you add a parameter {once: true}, it will listen
for the event specified and then unbind itself. That means, it will listen for a click only 
once on the set of elements if capture: false.

e.stopPropagation() - This will stop the event from bubbling to the parent elements.
If this is used when the value of capture = true, then it will take only the parent element.
If this is used when the value of capture = false, then it will take only the element on 
which the event is triggered.