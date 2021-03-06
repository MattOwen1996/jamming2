import React from 'react';
import 'SearchBar.css' from './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.search = this.props.onSearch;
  }

  handleTermChange() {
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onSearch={this.props.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
