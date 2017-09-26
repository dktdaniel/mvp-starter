import React from 'react';
import $ from 'jquery';
import { Input, Button } from 'reactstrap';


class Search extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
      term: 'enter activity and duration . . .'
    }
  }

  grabText(e) {
  	this.setState({
  		term: e.target.value
  	});
  }

  clearText(){
    this.setState({
      term: ''
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
      term: 'enter activity and duration . . .'
    });
  }

	render() {
		return (
		  <form>
		    <Input type="text" onClick={this.clearText.bind(this)} onChange={this.grabText.bind(this)} value={this.state.term} block/>
        <p></p>
		    <Button type="button" onClick={this.search.bind(this)} outline color="info" size="lg" block> check calories </Button>
		  </form>
		)
	}
}

export default Search;