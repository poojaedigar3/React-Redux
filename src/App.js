import React, { Component } from 'react';
import Counter from './Counter';
import store from './store/';

class App extends Component{

render() {
    return (

        <div>
            <Counter store={store} />
        </div>

    );
}}

export default App;
