import React from 'react';
import Routes from './containers/Routes';
import { Provider } from 'react-redux';
import { Store } from './Store';



export default class App extends React.Component {
    
    render() {
        return (
            <Provider store={Store}>
                <Routes/>
            </Provider>
        );
    }
}
