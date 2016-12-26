import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        // Binding the this inside the onInputChange can be done the way below or else using this concept
        // this.onInputChange = this.onInputChange.bind(this);
        // in which case please do remove the fat arrow function and make it an normal function
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}