/** @module resolveObjects
 *
 * Converts an object with dotted-key/value pairs to it's expanded version
 *
 * Usage:
 *   const resolveObjects = require("resolveObjects.js");
 *   var o = {
 *             a:{
 *                  b:{
 *                      c: 'z',
 *                     },
 *                },
 *                'a.b.d': 'y',
 *            }
 *   resolveObjects(row)   // =>
 *
 * @param {Object} obj
 */
module.exports = function(obj) {
    return obj
}