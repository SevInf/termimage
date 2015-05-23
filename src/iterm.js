export function detect() {
    return process.env.TERM_PROGRAM == 'iTerm.app';
}

/**
 * @param {Buffer} image image path or image content
 * @param {ShowImageOpts} displayOptions image options
 */
export function display(image, displayOptions) {
    var base64 = image.toString('base64'),
        termOptions = getTermOptions(displayOptions);

    console.log(`\u001b]1337;File=${termOptions}:${base64}\u0007\n`);
}

/**
 * @param {ShowImageOpts} displayOptions image options
 * @returns {String}
 */
function getTermOptions(displayOptions) {
    var termOptions = {
        inline: 1
    };
    if (displayOptions.name) {
        termOptions.name = new Buffer(displayOptions.name, 'utf8').toString('base64');
    }

    if (displayOptions.width) {
        termOptions.width = `${displayOptions.width}px`;
    }

    if (displayOptions.height) {
        termOptions.height = `${displayOptions.width}px`;
    }
    return encodeOptions(termOptions);
}

/**
 * @param {TermOptions} termOptions 
 * @returns {String}
 */
function encodeOptions(termOptions) {
    return Object.keys(termOptions)
        .map((key) => `${key}=${termOptions[key]}`)
        .join(';');
}
