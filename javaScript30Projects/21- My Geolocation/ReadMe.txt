 This works best if you have an Xcode simulator
 1) Fetch the arrow and the units
 2) Listen for the user's position. There are 2 methods for this
    a- navigator.geolocation.watchPosition() - Watches the position over time and returns the data as
        frequently as needed.
    b- navigator.geolocation.getCurrentPosition()- Gives just the current position
    1- With the data, pass the data.coords.speed as the textContent of the speed.
    2- rotate the arrow based on the location. Pass the data.coords.heading as the deg value for rotate
    and pass that as the style.transform for the arrow element.
