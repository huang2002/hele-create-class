# hele-create-class

A component class creator for hele.

# Usage

```js
// Use as an es module:
import { createClass } from "hele-create-class";
// Or use as a umd module:
const createClass = HEle.createClass;
// The method returns a component class:
const MyButton = createClass({
    // Pass your methods to it:
    render() {
        // ...
    },
    // Methods are automatically bound to the component instance:
    handleClick() {
        // ...
    },
    // `defaultProps` is also supported:
    defaultProps: {
        // ...
    }
});
```

# Changelog

See [CHANGELOG.md](CHANGELOG.md).
