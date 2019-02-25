# Algorithmic skills

INSTRUCTION :
Do the necessary to make the test pass. This is intended to evaluate your
algorithmic skills.

```javascript
    const resolveObjects = require("../app/controller/resolveObjects.js");
    it("works", () => {
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
            expect(resolveObjects(test.input)).toEqual(test.output);
        });

    })
```

## Launch Test Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```bash
git clone git@github.com:logu/A5aSuzAhjRkwxKbNLBKZcjfZywZHv5HvHuhqL29Q.git test_logu
cd test_logu/algorithmic_skill
npm install
npm test
```

Test results :

```bash
npm run test

> algorithmic_skill@1.0.0 test /Users/Logu/www/test/algorithmic_skill
> mocha --reporter spec



  Resolve objects
    ✓ should convert dot-notation into referencess


  1 passing (22ms)


```