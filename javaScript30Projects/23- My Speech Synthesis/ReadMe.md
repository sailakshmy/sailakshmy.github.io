1) Select the imput types sucha s range and text area
2) Select the voices dropdown
3) Select the buutons
4) Create a new instance of the SpeechSynthesisUtterance Object
5) Set the message in the text area as the default message for the new instance on page load.
6) Take the speechSynthesis global variable and add and event listener for the voiceschanged event
7) On trigger of voiceschanged event, handle it with a function that will get the voice array
from the speechSynthesis.
	a) filter the voices for English language only
	b) This array is then looped over to include all the items as options in the dropdown using .map()
and then join them to form a STring.
	c) Set the voiceOptions as the innerHTML of the dropdown.
10) Add an event listener to handle the change of input in the dropdown.
	a) Fetch the voice from the voices array and set it as the instance's voice.
	b) When a voice Selection is made, first stop the existing voice(if any) and then restart
	the speech with the newly chosen voice.
11) Fetch the options of input and add an Event Listener for a change event on each element.
	a) Set the instance's property with the new value
	b) Repeat the function that handles the 10 b.
12) Add event listener on the buttons
	a) There are 3 ways to pass an argument for an event handler function
		1) function(){
			toggle(false);
			}
		2) toggle.bind(null, false);
		3) () => toggle(false);

