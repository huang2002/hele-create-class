import { Component } from "hele";

export function createClass(options) {
    class ComponentClass extends Component {
        constructor(props) {
            super(props);
            let constructor;
            for (const key in options) {
                const value = options[key];
                if (key === 'constructor') {
                    constructor = value;
                } else {
                    this[key] = typeof value === 'function' ? value.bind(this) : value;
                }
            }
            if (constructor) {
                constructor.bind(this, props);
            }
        }
    }
    if (options.defaultProps) {
        ComponentClass.defaultProps = options.defaultProps;
        delete options.defaultProps;
    }
    return ComponentClass;
}
