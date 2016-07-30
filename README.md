# operational-transform-reducers
A OT type library implemented with plain json objects and pure reducers.

## Usage

```shell
npm install --save operationa-transform-reducers
```

and then in your code:
```javascript
import {Array, arrayInsert, arrayRemove} from 'operational-transform-reducers';

// do NOT use the `new` keyword. Array is a pure function.
var list = Array(['some', 'list']);

// and now list should look like:
// list = {
//     nodes: {'key-0': 'some', 'key-1': 'list'},
//     childKeys: ['key-0', 'key-1']
// }
```

## Develop

1. First make your changes, then git commit. Use `serve-docs` to view live updated at [http://localhost:5000](http://localhost:5000)
2. run `build-docs`, `build-static-docs`, `gh-pages`
3. Then remember to push to master.
