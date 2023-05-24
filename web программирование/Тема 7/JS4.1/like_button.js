'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        
        return e(
            'button',
            {
                onClick: () => this.setState({ liked: true })
            },
            'Like'
        );
    }
}

class MyComponent extends React.Component {
    render() {
        return e(
            'div',
            null,
            e(LikeButton),
            e(LikeButton),
            e(LikeButton)
        );
    }
}

ReactDOM.render(e(MyComponent), document.getElementById('like_button_container'));
