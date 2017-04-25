
1. React passes the information down automatically and any component in the subtree can access 
   it by defining contextTypes.

2. If contextTypes is not defined, then context will be an empty object.
3. contextTypes
4. childContextTypes
5. getChildContext
6. If contextTypes is defined within a component, the following lifecycle methods will receive an additional parameter, the context object:

 6.1. constructor(props, context)
 
 6.2. componentWillReceiveProps(nextProps, nextContext)
 
 6.3. shouldComponentUpdate(nextProps, nextState, nextContext)
 
 6.4. componentWillUpdate(nextProps, nextState, nextContext)
 
 6.5. componentDidUpdate(prevProps, prevState, prevContext)

下面是关于context 的demo：

import React from 'react';
const PropTypes = require("prop-types");

class Button extends React.Component {
    render() {
        return (
            <button style={{ background: this.context.color }}>
                {this.props.children}
            </button>
        );
    }
}

Button.contextTypes = {
    color: PropTypes.string
};


class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends React.Component {
    getChildContext() {
        return { color: "purple" };
    }
    render() {       
        const children = this.props.messages.map((message) =>
            <Message key={message.id} text={message.text} />
        );
        return <div>{children}</div>;
    }
}

MessageList.childContextTypes = {
    color: PropTypes.string
};

export default MessageList;
