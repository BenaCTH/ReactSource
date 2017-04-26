import { INCREASE, DECREASE } from '../actions/counterActions'

function counter(state = { count: 0 }, action) {
    const count = state.count;
    console.log(action);
    switch (action.type) {
        case INCREASE:
            return { count: count + 1 };
        case DECREASE:
            return { count: count - 1 };
        default:
            return state;
    }
}

export default counter;