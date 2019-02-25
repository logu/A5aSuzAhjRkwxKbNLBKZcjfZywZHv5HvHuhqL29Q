const expect = require('chai').expect
const resolveObjects = require('../app/controller/resolveObjects.js')

describe('Resolve objects', function() {
    it('should convert dot-notation into referencess', () => {
        const tests = [
            {
                input : {
                    a:{
                        b:{
                            c: 'z',
                        },
                    },
                    'a.b.d': 'y',
                },
                output : {
                    a:{
                        b:{
                            c: 'z',
                            d: 'y',
                        },
                    },
                }
            }
        ]

        tests.forEach(test=>{
            expect(resolveObjects(test.input)).to.deep.equal(test.output)
        })

    })
});