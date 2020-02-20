import React from 'react';
import { connect } from 'react-redux';
import Api from '../api/Api';
import { Redirect } from 'react-router-dom';

class WeCook extends React.Component {

    constructor() {
        super();
        this.state = {
            recipe: "",
            weCookList: []
        };
        this.thelist = [];
        this.caller = null;
    }

    setWeCoke = (list, recipeName) => {
        console.log("set we cook")
        this.setState({
            ...this.state,
            recipe: recipeName,
            weCookList: list
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("sublit : ", e.target[0].value);
        if (e.target[0].value.length === 0) {
            return;
        }
        return <Api setList={ this.setWeCoke } recipeName={e.target[0].value}/>
    }

    handleAddAll = (e) => {

    }

    removeItem = (e) => {
        e.preventDefault();
        for (let i = 0; i < this.state.weCookList.length; i++) {

            if (e.target.name === this.state.weCookList[i]) {
                this.setState({
                    ...this.state,
                    weCookList: this.state.weCookList.filter ( (item, index) => index !== i)
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

        const list = this.state.weCookList.map(ingredient => {
            return (
                <li className="mourrir" key={ingredient}>
                    {ingredient}
                    <button name={ingredient} key={ingredient} onClick={ this.removeItem }>Remove</button>
                </li>
            );
        });
        console.log("list : ", list)

        return (
            <div>
                <center>
                    <form onSubmit={ this.handleSubmit }>
                        <p><input type="text" placeholder="Recipe" className='input'/></p>
                    </form>
                </center>
                <center>

                </center>
                <center>
                    { list.length > 0 ?
                        <div>
                            <p> {this.state.recipe} </p>
                            <ul className="shoppingList">
                                { list }
                            </ul>
                            <button className="myButton" onClick={ this.handleAddAll }>Add all</button>
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
        console.log("cook did")
        //this.caller = setInterval(function(){ console.log("the list : ", this.thelist); }, 200);
    }

    componentWillUnmount() {
        //clearInterval(this.caller);
    }
}

const mapStateToProps = (state) => {
    return { state };
}

export default connect(mapStateToProps)(WeCook);
