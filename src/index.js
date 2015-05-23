import fs from 'fs';
import * as iterm from './iterm';
import * as dummy from './dummy';

const methods = {
    iterm,
    dummy
};

var defaultMethod = detectDefaultMethod();
export const canDisplayImage = !!defaultMethod && defaultMethod !== dummy;

function detectDefaultMethod() {
    for (var name in methods) {
        if (methods[name].detect()) {
            return methods[name];
        }
    }
    return null;
}

/**
 * @param {String|Buffer} image image path or image content
 * @param {ShowImageOpts} opts imageOptions
 */
export function displayImage(image, opts={}) {
    if (typeof image === 'string') {
        image = fs.readFileSync(image);
    }
    var method = defaultMethod;
    if (opts.method) {
        method = methods[opts.method];
        if (!method) {
            throw new Error('Unknown method: ' + opts.method);
        }
    }
    method.display(image, opts);
}
