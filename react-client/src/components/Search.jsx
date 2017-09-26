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
  	// console.log(this.state.url);
  	$.ajax({
  		url: '/search',
  		method: 'POST',
  		contentType: 'application/json',
  		dataType: 'json',
  		data: JSON.stringify({
  			term: this.state.term,
  		}),
      success: (data) => {
        console.log('success!!!!', data);
        this.props.updateList(data);
      }
  	});
  }

	render() {
		return (
		  <form>
		    <input type="text" onChange={this.grabText.bind(this)} value={this.state.url}/>
		    <button type="button" onClick={this.search.bind(this)}> SUBMIT </button>
		  </form>
		)
	}
}

export default Search;