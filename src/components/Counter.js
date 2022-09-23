import React from "react";
import CardBody from "./CardBody";
import {connect} from 'react-redux';
import { incrementCounter, decrementCounter} from "../redux/actions";


const Counter = ({count, increment, decrement}) => {
    // const handleIncrement = () => {
    //     dispatch({type: 'INCREMENT'});
    // };

    // const handleDecrement = () => {
    //     dispatch({type: 'DECREMENT'});
    // };
    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter!
            </div>
            <CardBody count={count} handleIncrement={increment} handleDecrement={decrement} />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return (
        {
        increment: () => dispatch(incrementCounter()),
        decrement: () => dispatch(decrementCounter())
        }
)};

const mapStateToProps = state => ({
    count: state.count
});

// const connectCounter = connect(mapStateToProps);

// const ReduxCounter = connectCounter(Counter);

// export default ReduxCounter;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);