import React from 'react';
import {connect} from 'react-redux';
import {addIngredient, removeIngredient, setMarketList, clearList} from '../actions/Action';
import {Redirect} from "react-router-dom";
import firebase from '../firebase';
import '../css/marketList.css';

class MarketList extends React.Component {

    removeItem = (e) => {
        e.preventDefault();
        let myMarketList = this.props.marketList;
        for (let i = 0; i < myMarketList.length; i++) {

            if (e.target.name === myMarketList[i]) {
                this.props.dispatch(removeIngredient(i));
                break;
            }
        }
        e.target.name = "";
    }

    handleClear = (e) => {
        this.props.dispatch(clearList())
    }

    addItem = (e) => {
        e.preventDefault();
        if (e.target[0].value.length === 0) {
            return;
        }
        for (let i = 0; i < this.props.marketList.length; i++) {
            if (e.target[0].value === this.props.marketList[i]) {
                e.target[0].value = "";
                return;
            }
        }
        this.props.dispatch(addIngredient(e.target[0].value));
        e.target[0].value = "";
    }

    render() {
        if (!this.props.isConnected) {
            return <Redirect push to='/'/>;
        }

        const list = this.props.marketList.map(ingredient => {
            return (
                <li className="mourrir" key={ingredient}>
                    {ingredient}
                    <button name={ingredient} key={ingredient} onClick={this.removeItem}>Remove</button>
                </li>
            );
        });

        return (
            <div>
                <center><p className="shopping"> Shopping list: </p></center>
                <center>
                    <form onSubmit={this.addItem}>
                        <input className='input' type='text'/>
                        <button className="myButton">Add</button>
                    </form>
                    <button className="myButton" onClick={this.handleClear}>Clear list</button>
                </center>
                <center>
                    <ul className="shoppingList">
                        {list}
                    </ul>
                </center>
            </div>
        )
    }

    componentDidMount() {
        if (!this.props.isConnected) {
            return <Redirect push to='/'/>;
        }

        const itemRef = firebase.database().ref(this.props.pseudo);
        itemRef.on('value', async (snapshot) => {
            let initializeList = [];
            const items = await snapshot.val();
            for (const prop in items) {
                initializeList.push(items[prop]);
            }
            this.props.setMarketList(initializeList);
        });
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMarketList: (marketList) => dispatch(setMarketList(marketList)),
        dispatch: (action) => dispatch(action)
    };
}

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarketList));
export default connect(mapStateToProps, mapDispatchToProps)(MarketList);
