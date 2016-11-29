import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './youtube_page/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyCNGp-hXwNcwPe0rusuvBr6Vdy4OhqwWk8';

// Creating a new component. This component should produce some HTML
const App = () => {
    return (
        <div> 
    		<SearchBar />
     	</div>
        );
};

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));