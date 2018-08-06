const h = HEle.createElement;

HEle.render(
    h(
        HEle.createClass({
            render() {
                return h('h1', null, this.props.text);
            }
        }), {
            text: 'Hi!'
        }
    ),
    document.getElementById('root')
);
