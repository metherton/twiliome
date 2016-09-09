var fs = require('fs');

// Read and eval library
filedata = fs.readFileSync('./twilio-lib/twilio.js','utf8');
eval(filedata);

/* The quadtree.js file defines a class 'QuadTree' which is all we want to export */

exports.TwilioMe =  TwilioMe

