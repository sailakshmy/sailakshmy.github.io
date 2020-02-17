1) Get the user's video.
2) Take a frame from the video and paint it on the canvas
	1. Get the width and the height of the actual video
	2. Set the width and height of the canvas to match the width and height of the video.
	3. For every 30-40ms, take an image of the video and place it on the canvas
3) Take a photo of the frame.
4) To apply filters on the image, take the pixel values out of the image, apply the filter values
and then apply it on the image.