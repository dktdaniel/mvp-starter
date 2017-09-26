import React from 'react';
import $ from 'jquery';


class Search extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
      term: 'Enter activity and duration . . .'
    }
  }

  grabText(e) {
  	this.setState({
  		term: e.target.value
  	});
  }

  search() {
  	$.ajax({
  		url: '/search',
  		method: 'POST',
  		contentType: 'application/json',
  		dataType: 'json',
  		data: JSON.stringify({
  			term: this.state.term,
  		}),
      success: (data) => {
        this.props.updateList(data);
      }
  	});
    this.setState({
      term: 'Enter activity and duration . . .'
    });
  }

	render() {
		return (
		  <form>
		    <input type="text" onChange={this.grabText.bind(this)} value={this.state.term}/>
		    <button type="button" onClick={this.search.bind(this)}> SUBMIT </button>
		  </form>
		)
	}
}

export default Search;