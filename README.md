# Termimage

Library for displaying images in supported terminals:

* iTerm2 nightly builds
* TODO: Xterm with a help of w3m

## Usage

```javascript
var termimage = require('termimage');

// Show image from file
termimage.displayImage('/path/to/image');

// Show image from buffer
termimage.displayImage(buffer);

// Show scaled image.
termimage.displayImage(buffer, {
    width: 100,
    height: 100
});

// Aspect ratio will be preserved if
// only one dimension is specified 
termimage.displayImage(buffer, {
    width: 100
});

// Specify the name of the image
termimage.displayImage(buffer, {
    name: 'my photo'
});

```
