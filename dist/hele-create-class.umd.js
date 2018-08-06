(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hele')) :
    typeof define === 'function' && define.amd ? define(['exports', 'hele'], factory) :
    (factory((global.HEle = global.HEle || {}),global.HEle));
}(this, (function (exports,hele) { 'use strict';

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function createClass(options) {
        var ComponentClass = function (_Component) {
            _inherits(ComponentClass, _Component);

            function ComponentClass(props) {
                _classCallCheck(this, ComponentClass);

                var _this = _possibleConstructorReturn(this, (ComponentClass.__proto__ || Object.getPrototypeOf(ComponentClass)).call(this, props));

                var constructor = void 0;
                for (var key in options) {
                    var value = options[key];
                    if (key === 'constructor') {
                        constructor = value;
                    } else {
                        _this[key] = typeof value === 'function' ? value.bind(_this) : value;
                    }
                }
                if (constructor) {
                    constructor.bind(_this, props);
                }
                return _this;
            }

            return ComponentClass;
        }(hele.Component);

        if (options.defaultProps) {
            ComponentClass.defaultProps = options.defaultProps;
            delete options.defaultProps;
        }
        return ComponentClass;
    }

    exports.createClass = createClass;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
