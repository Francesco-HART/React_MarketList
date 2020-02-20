import React from 'react';
import { API_KEY } from './ApiConfig';

export default class Api extends React.Component {

    constructor(props) {
        super(props);
        //console.log("Api :", this.props);
        //this.get(this.props.recipeName);
    }

    get(recipeSearched) {
        const url = 'https://api.spoonacular.com/recipes/search?apiKey=' + API_KEY + '&query=' + recipeSearched;
        let list = null;
        fetch(url)
            .then(results => {
                return results.json();
            })
            .then(data => {
                list = data;
            });
        console.log("list:" , list);
        this.props.setList(list, this.props.recipeName);
    }

    render() {
        return (
          console.log("render")
        );
    }

    componentDidMount() {
        console.log("componentDidMount")

    }
}
