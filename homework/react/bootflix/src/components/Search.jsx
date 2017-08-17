import React, { Component } from 'react';

// Update the forms to utilize methods being passed down from App.js
class Search extends Component {
  render() {
    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
          <form id="title-search-form" method="get">
            <input type="text" name="title" value={this.props.titleToSearch} onChange={this.props.handleTitleChange} placeholder="Enter movie title" />
            <input onClick={this.props.searchByTitle} type="button" value="Search for this title" />
          </form>
        </div>

        <div className="search">
          <form id="id-search-form" method="get">
            <input type="text" name="id" value={this.props.idToSearch} onChange={this.props.handleIdChange} placeholder="Enter omdb movie ID" />
            <input onClick={this.props.searchById} type="button" value="Search by ID" />
          </form>
        </div>

      </section>
    );
  };
}

export default Search;