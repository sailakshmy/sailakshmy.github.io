// JavaScript source code

const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

getVideo();
video.addEventListener('canplay', paintToCanvas);


function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })//This returns a promise
        .then(localMediaStream => {
            console.log(localMediaStream);
            /*This is done to pass a parameter that the video player can understand. Since the src
             * is usually a URL, we create a URL using the window.URL.createObjectURL method.*/
            //video.src = window.URL.createObjectURL(localMediaStream);// Commented out because Chrome doesn't support this anymore
            video.srcObject = localMediaStream;
            video.play();
        })
        //In case someone doesn't permit you to use their webcam, write catch statement
        .catch(err => {
            window.alert('You need to grant access to webcam for the application to run');
            console.log('Please grant access to webcam!');
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width, height);
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        /*The way that drawImage works is, you pass an image or video element,
         * it starts from the 0,0 corner(that is the left most corner) and then draws an
         * image */
        ctx.drawImage(video, 0, 0, width, height);

        //To mess with the pixels
        let pixels = ctx.getImageData(0, 0, width, height);

        // This is to apply the red effect
        //pixels = redEffect(pixels);

        //This is to split the image into 3 different colours
       // pixels = rgbSplit(pixels);

        //This is for the slider inputs
        pixels = greenScreen(pixels);

        ctx.putImageData(pixels, 0, 0);
    }, 40);
}

function takePhoto() {
    //This is to play the sound
    snap.currentTime = 0;
    snap.play();

    //Take the data out of the canvas
    const data = canvas.toDataURL('images/jpeg');
    console.log(data);// The data here will be a text based representation of the actual Pic
    /*To make this textual representation to an image*/
    const link = document.createElement('a');
    link.href = data;
    /* The following 2 commands will provide a link to download the image to your system
     * with the file name as myImage. The text in the link is defined by textContent. */
    link.setAttribute('download', 'myImage');
    link.textContent = "Download Image";
    link.innerHTML = `<img src= ${data} alt="My Image"/>`;
    /* The following command will insert the latest image to the beginning of the line */
    strip.insertBefore(link, strip.firstChild);
}


function redEffect(pixels) {
    /* We are incrementing this by 4, because pixels.data is a huge array, where pixels[0] = value of r,
     * pixels[1] = value of b, pixels[2] = value of g, pixels[2] = vslue of b and pixels[3] = value of a*/

    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 10;// changes the red value
        pixels.data[i + 1] = pixels.data[i + 1] - 50;//changes the green value
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;// changes the blue value
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 500] = pixels.data[i + 0];
        pixels.data[i + 150] = pixels.data[i + 1];
        pixels.data[i - 200] = pixels.data[i + 2];
    }
    return pixels;
}

/**
 * The way greenscreen works is that it gives  all the colours in betwwen this rgb value and
 * take them out. For example, you find a certain range of special green and then you take
 * that out, so that they don't occur in the people's clothing or background or so. So basically, if in your video
 * you have a specific range of colours and the same value is set via the input sliders, then 
 * that part of the screen will become transparent.
 * 
 */
function greenScreen(pixels) {
    const levels = {};//Object that will hold the slider input values

    // Selecting all the slider inputs
    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });
    console.log(levels);

    for (let i = 0; i < pixels.data.length;i += 4) {
       let red = pixels.data[i + 0];
      let  green = pixels.data[i + 1];
       let blue = pixels.data[i + 2];
        let alpha = pixels.data[i + 3];

        /* if the values of red, green and blue are anywhere between the respective 
         * min and max values, we take it out and make the alpha value as 0
         * (totally transparent) */
        if (red >= levels.rmin && red <= levels.rmax
            && green >= levels.gmin && green <= levels.gmax
            && blue >= levels.bmin && blue <= levels.bmax) {
            pixels.data[i + 3] = 0;
        }
    }
    return pixels;
}