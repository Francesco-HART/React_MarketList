import React from 'react';
import '../css/login.css';
import {connect} from 'react-redux';
import {userConnect} from '../actions/Action';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {

    setPseudo = (event) => {
        event.preventDefault();
        if (event.target[0].value.length === 0) {
            return;
        }
        this.props.dispatch(userConnect(event.target[0].value));
    }

    render() {
        if (this.props.state.isConnected) {
            return <Redirect push to='/market'/>;
        }

        return (
            <div className="login">
                <div className="bg-image"></div>

                <div className="bg-text"></div>

                <h2 className="login-header">Log in</h2>

                <form className="login-container" onSubmit={this.setPseudo}>
                    <p><input type="pseudo" placeholder="Pseudo"/></p>
                    <p><input type="submit"/></p>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {state};
}

export default connect(mapStateToProps)(Login);
