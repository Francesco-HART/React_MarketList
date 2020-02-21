import React from 'react';
import {connect} from 'react-redux';
import {get} from '../api/Api';
import {Redirect} from 'react-router-dom';
import {addIngredient} from "../actions/Action";
import '../css/WeCook.css';

class WeCook extends React.Component {

    constructor() {
        super();
        this.state = {
            recipe: "",
            weCookList: []
        };
    }

    handleSubmit = async (e) => {
        const searchedText = e.target[0].value;
        e.target[0].value = "";
        e.preventDefault();
        if (searchedText.length === 0) {
            return;
        }
        let list = await get(searchedText);
        this.setState({
            ...this.state,
            recipe: searchedText,
            weCookList: list
        })
    }

    handleAddAll = (e) => {
        for (let i = 0; i < this.state.weCookList.length; i++) {
            let isInList = false;
            for (let j = 0; j < this.props.state.marketList.length; j++) {
                if (this.state.weCookList[i] === this.props.state.marketList[j]) {
                    isInList = true;
                    break;
                }
            }
            if (!isInList) {
                this.props.dispatch(addIngredient(this.state.weCookList[i]));
            }
        }
        this.setState({
            ...this.state,
            weCookList: []
        })
    }

    removeItem = (e) => {
        e.preventDefault();
        for (let i = 0; i < this.state.weCookList.length; i++) {

            if (e.target.name === this.state.weCookList[i]) {
                this.setState({
                    ...this.state,
                    weCookList: this.state.weCookList.filter((item, index) => index !== i)
                })
                break;
            }
        }
        e.target.name = "";
    }

    render() {
        if (!this.props.state.isConnected) {
            return <Redirect push to='/'/>;
        }

        const list = this.state.weCookList.map(recipe => {
            return (
                <li className="mourrir" key={recipe}>
                    {recipe}
                    <button name={recipe} key={recipe} onClick={this.removeItem}>Remove</button>
                </li>
            );
        });

        return (
            <div>
                <center>
                    <p className="WeCook"> We Cook: </p>
                    <form onSubmit={this.handleSubmit}>
                        <p><input type="text" placeholder="Recipe" className='input'/></p>
                    </form>
                </center>
                <center>

                </center>
                <center>
                    {list.length > 0 ?
                        <div>
                            <p> {this.state.recipe} </p>
                            <ul className="shoppingList">
                                {list}
                            </ul>
                            <button className="myButton" onClick={this.handleAddAll}>Add all</button>
                        </div>
                        :
                        <p></p>
                    }
                </center>
            </div>
        );
    }

    componentDidMount() {
        if (!this.props.state.isConnected) {
            return <Redirect push to='/'/>;
        }
    }

}

const mapStateToProps = (state) => {
    return {state};
}

export default connect(mapStateToProps)(WeCook);
