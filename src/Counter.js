import React from 'react';
import {connect} from 'react-redux';

function Counter(props){
    console.log('props',props);
    return (
        <div>
            <h1>React-Redux Counter!</h1>
            <p>Count: {props.count}</p>
            <span>
            <button onClick={props.onIncrementClick}>Increment Count</button>
            <button onClick={props.onDecrementClick}>Decrement Count</button></span>

        </div>
    )
}

function mapStateToProps(state){
    console.log('mapstatetoprops', state);
    return {
        count:state.count
    }
}

function mapDispatcherToProps(dispatch) {

    console.log('dispatch', dispatch);
    return {


        onIncrementClick: () => {
            console.log("Increment");
            const action = {type: 'INCREMENT'};
            dispatch(action);
        },
        onDecrementClick: () => {
            console.log("Decrement");
            const action = {type: 'DECREMENT'};
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatcherToProps)(Counter);