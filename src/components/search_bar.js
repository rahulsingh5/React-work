import React, { Component } from 'react';
import _ from 'lodash';

// const SearchBar = () => {
// 	return <input type="text" />;
// };

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	render() {
		return (
			<div className="search-bar">
				<input
					type="text"
					value={this.state.term}
					onChange={(event) => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChanged(term);
	}
}

export default SearchBar;
