import React from 'react';
import { Button } from 'reactstrap';
import $ from 'jquery';


class Deserve extends React.Component {
	constructor(props) {
	super(props);
	this.state = { 
	}
  }

  componentDidMount() {
  	$('#map').hide()
  }

  showMap() {
  	$('#map').show()
  }

  render() {
  	return(
  	<Button outline color="success" block size="lg" onClick={this.showMap}>drink 524 calories of sugary goodness</Button>
  	)
  }
}


export default Deserve;