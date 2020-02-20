import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userDeconnection } from '../actions/Action';

class Header extends React.Component {
    deconnection = (e) => {
        this.props.dispatch(userDeconnection());
    }

    render() {
        return (
            <div>
                <nav className="headerNav">
                    <h2>Market List</h2>
                    { this.props.state.pseudo.length !== 0 ?
                        <div>
                            <div className="trait"> </div>
                            <ul>
                                <li className="despacito"><Link to='/market'>Market</Link></li>
                                <li className="despacito"><Link to='/wecook'>WeCook</Link></li>
                                <li className="despacito" onClick={this.deconnection}><Link to='/'>Log Out</Link></li>
                                <p>Hello {this.props.state.pseudo} !</p>
                            </ul>
                        </div>
                        :
                        <div></div>
                    }
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { state };
}
export default connect(mapStateToProps)(Header);
