const R = require('ramda')

function _addKey (keysArray, obj, value) {
    var firstKey = keysArray.shift()
    // check if adding key has multiple levels
    if (keysArray.length > 0) {
        obj[firstKey] = obj[firstKey] || {}
        // check if value of first key is an object
        if (!R.is(Object, obj[firstKey])) {
            // check if value is an object or value it is not empty
            if (!(R.is(Object, value) && R.isEmpty(value))) {
                throw new Error(`${firstKey} is a ${typeof obj[firstKey]}`)
            }
            // added
            return
        }
        // add key recurcively
        _addKey(keysArray, obj[firstKey], value)
    } else {
        // check if value of first key is an object and it's not empty
        if (R.is(Object, obj[firstKey]) && !R.isEmpty(obj[firstKey])) {
            // check if value is an object or value it is not empty
            if (!(R.is(Object, value) && R.isEmpty(value))) {
                throw new Error(`redefining non-empty obj['${firstKey}']`)
            }
            // nothing to add
            return
        }
        // single key
        obj[firstKey] = value
    }
}

function _flatenKeys (value, key, obj) {
    // check if it is a dot notation
    if (key.indexOf('.') !== -1) {
        // add reference
        _addKey(R.split('.', key), obj, value)
        // remove dot notation
        delete obj[key]
    }
}

/** @module resolveObjects
 *
 * Converts dotted-key/value pairs to expanded version
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
    let o = R.clone(obj)
    R.mapObjIndexed(_flatenKeys, o)
    return o
}