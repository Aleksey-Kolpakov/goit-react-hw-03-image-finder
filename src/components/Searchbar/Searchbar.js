import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
        searchQuerry: '',
    }
    handleChange = ({ target }) => {
        this.setState({
            searchQuerry: target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchQuerry);
        this.setState({ searchQuerry: '' });
    }
    render() {
        return (
            <header className="Searchbar">
                <form onSubmit={this.handleSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchQuerry"
                        value={this.state.searchQuerry}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;