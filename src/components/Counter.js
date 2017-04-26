import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { increaseTodo, decreaseTodo } from '../actions/counterActions'


class Counter extends Component {
    render() {
        const { value, onIncreaseClick, onDecreaseClick } = this.props;
        return (
            <div className="counnter-container">
                <p>{value}</p>
                <input type="button" value="+" onClick={onIncreaseClick} />
                <input type="button" value="-" onClick={onDecreaseClick} />
            </div>
        );
    }
}

Counter.PropTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseTodo()),
        onDecreaseClick: () => dispatch(decreaseTodo())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter); 