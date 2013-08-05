
# comparator

Generate comparator functions with deep object access support.

## Example

```js
var comparator = require('comparator');

var asc = comparator.asc();
var desc = comparator.desc();

asc('a', 'b') == -1;
desc('a', 'b') == 1;

var asc = comparator.asc('foo.bar');

asc(
  { foo: { bar: 'a' } },
  { foo: { bar: 'b' } }
) == -1;
```

## API

### comparator([prop]), comparator.asc([prop])

Create a comparator function that sorts values in ascending order.

If `prop` is specified, that property will be used as the value for comparison.

### comaprator.desc([prop])

The same, but descending.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install comparator
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
